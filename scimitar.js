/**
 * Scimitar
 * 
 * Reconnoiter analytics console
 * 
 * @author Michal Taborsky <michal.taborsky@nrholding.com>
 * 
 */

var util = require('util');
var amqp = require('amqp');
var fs = require('fs');
var nconf = require('nconf');
var path = require('path');
var os = require('os');
var datastore = require('./libs/datastore.js');
var events = require('./libs/events.js');
var log4js = require('log4js');
var express = require('express');

var connection;

function loadConfig() {
	
	nconf.argv()
		 .file( { file: path.join(__dirname, 'config.json') } );
	nconf.defaults(defaults);
	global.settings = nconf;
	return global.settings;
}


function ingestConnect() {
	var connProps = settings.get("amqp");
	connProps.clientProperties = { product: "scimitar" };
	logger.info("Connecting over amqp to " + settings.get("amqp:host"));
	connection = amqp.createConnection(connProps);
	global.connection = connection;
	
	//Wait for connection to become established.
	connection.on('ready', function() {
		var qname = settings.get("ingest:queue") + "-" + os.hostname() + "-" + process.pid;
		connection.queue(qname, { autoDelete : true, passive: false },
			function (queue) {
				queue.bind(settings.get("ingest:exchange"), settings.get("ingest:routingKey"));
				queue.subscribe( function(message) {
					events.parseMessage(message.data.toString());
				});
				logger.info("Listening on queue " + queue.name);
			} 
		);
	});
	connection.on('close', function(had_error) {
		console.error("Connection to "+ settings.get("amqp:host") + " closed.");
	});
	connection.on('error', function(error) {
		console.error("Connection to "+ settings.get("amqp:host")+ " failed: " + error);
	});
}


// load default config from file
var defaults = JSON.parse(fs.readFileSync(path.join(__dirname, 'defaults.json')));
var settings = loadConfig();

log4js.configure(settings.get("log4js"));
var logger = log4js.getLogger('scimitar');
logger.info("Scimitar starting...");

// initialize data store
datastore.setLogger(logger);
datastore.setTemplate( JSON.parse(fs.readFileSync(path.join(__dirname, 'datatemplate.json'))) );
datastore.load(path.join(__dirname, settings.get("datafile")));
var data = datastore.data();

// initialize events handling lib
events.settings(settings, logger).datastore(data);

// connect ingest queue and listen for messages
ingestConnect();

var app = express();
app.use(log4js.connectLogger(logger, { level: 'auto' }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendfile( path.join( __dirname, 'public/index.html' ) );
});

app.get('/overview', function(req, res) {
	events.statusOverview(function(data) {
		res.json(data);
	});
});

app.get('/settings', function(req, res) {
	res.json(settings.stores.file.store);
});

app.get('/flush', function(req, res) {
	events.flushChecks(function(data) {
		res.json(data);
	});
});

app.get('/data/:key', function(req, res) {
	if (data[req.params.key] != null) {
		res.json(data[req.params.key]);
	} else {
		res.status(404);
	}
});
app.listen(settings.get("httpServer:port"));
		
logger.info('HTTP server listening on ' + settings.get("httpServer:listen") + ':' + settings.get("httpServer:port"));

// handle signals
process.on('SIGHUP', function() {
	logger.info('Got SIGHUP, reloading configuration');
	loadConfig();
});

process.on('exit', function() {
	logger.info('Saving data');
	datastore.saveSync(path.join(__dirname, settings.get("datafile")));
	logger.info('Exiting');
});

logger.info("Ready");