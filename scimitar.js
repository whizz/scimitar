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
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var nconf = require('nconf');
var path = require('path');
var os = require('os');
var datastore = require('./libs/datastore.js');
var events = require('./libs/events.js');

var connection;

function loadConfig() {
	
	console.log("Loading configuration");
	nconf.argv()
		 .file( { file: path.join(__dirname, 'config.json') } );
	nconf.defaults(defaults);
	global.settings = nconf;
	return global.settings;
}

function response (req, res) {
	
	//some private methods
	var serverError = function(code, content) {
		res.writeHead(code, {
			'Content-Type' : 'text/plain'
		});
		res.end(content);
	};

	var renderHtml = function(content) {
		res.writeHead(200, {
			'Content-Type' : 'text/html'
		});
		res.end(content, 'utf-8');
	};
	
	var renderJSON = function(content) {
		res.writeHead(200, {
			'Content-Type' : 'application/json'
		});
		res.end(JSON.stringify(content, null, 2), 'utf-8');
	};

	// parse URL
	var url_parts = url.parse(req.url);
	// parse query
	//var raw = querystring.parse(url_parts.query);
	
	if (url_parts.pathname == '/') {
		url_parts.pathname = "/index.html";
	}
	
	switch (url_parts.pathname) {
	
	case '/overview':
		events.statusOverview(renderJSON);
		break;

	case '/settings':
		renderJSON(settings.stores.file.store);
		break;
	
	case '/exit':
		renderJSON({status: "OK"});
		process.exit();
		break;
	
	case '/flush':
		events.flushChecks(renderJSON);
		break;
		
	default:

		// generic methods
		subs = url_parts.pathname.match(/^\/data\/(.+)/);
		if ( subs != null && subs[1] != null) {
			events.outputRaw(subs[1], renderJSON);
			return;
		}

		fs.readFile(__dirname + "/public" + url_parts.pathname, function(error, content) {
			if (error) {
				serverError(404, "404/Not found");
			} else {
				renderHtml(content);
			}
		});
		break;
	}
		
};

function ingestConnect() {
	console.log("Connecting over amqp to " + settings.get("amqp:host"));
	connection = amqp.createConnection(settings.get("amqp"));
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
				console.log("Listening on queue " + queue.name);
			} 
		);
	});
	connection.on('close', function(had_error) {
		console.error("Connection to "+ settings.get("amqp:host") + " closed, will try again in " 
				+ settings.get("ingest:retry") + "ms (error: " + had_error + ")");
		setTimeout(ingestConnect, settings.get("ingest:retry"));
	});
	connection.on('error', function(error) {
		console.error("Connection to "+ settings.get("amqp:host")+ " failed");
	});
}


// load default config from file
var defaults = JSON.parse(fs.readFileSync(path.join(__dirname, 'defaults.json')));
var settings = loadConfig();

// initialize data store
datastore.setTemplate( JSON.parse(fs.readFileSync(path.join(__dirname, 'datatemplate.json'))) );
datastore.load(path.join(__dirname, settings.get("datafile")));
var data = datastore.data();

// initialize events handling lib
events.settings(settings).datastore(data);

// connect ingest queue and listen for messages
ingestConnect();

// create http server
http.createServer(response).listen(settings.get("httpServer:port"), settings.get("httpServer:listen"));
console.log('HTTP server listening on ' + settings.get("httpServer:listen") + ':' + settings.get("httpServer:port"));

// handle signals
process.on('SIGHUP', function() {
	console.log('Got SIGHUP, reloading configuration');
	loadConfig();
});

process.on('exit', function() {
	console.log('Saving data');
	datastore.saveSync(path.join(__dirname, settings.get("datafile")));
	console.log('Exiting');
});

console.log("Ready");