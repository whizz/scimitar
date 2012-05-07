var fs = require('fs');

var template = {};
var store = {};

exports.load = function(file) {
	
	try {
		content = fs.readFileSync(file);
		var newdata = JSON.parse(content);
		store = newdata;
		console.log('Data loaded from file ' + file);
	} catch (e) {
		console.error('Did not load data from file ' + file + ', using template');
	}
	for (key in template) {
		if (store[key] == null) {
			store[key] = template[key];
		}
	}
	return this;
};

exports.save = function(file, callback) {
	fs.writeFile(file, JSON.stringify(store, null, 2), function(error) {
		if (error) {
			console.error('Error writing data file ' + file);
			callback( JSON.stringify( { status : "FAIL" } ));
		} else {
			console.log('Data saved to file ' + file);
			callback( JSON.stringify( { status : "OK" } ));
		}
	});
	return this;
};

exports.saveSync = function (file) {
	fs.writeFileSync(file, JSON.stringify(store, null, 2));
	return this;
};

exports.setTemplate = function(newTemplate) {
	template = newTemplate;
	return this;
};

exports.data = function() {
	return store;
};