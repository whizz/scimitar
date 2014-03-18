var settings,
	data,
	logger;

function increment(arr, counter, inc) {

	inc = inc || 1;
	
	if (arr == null || counter == null) {
		return;
	}

	if (arr[counter] == null) {
		arr[counter] = inc;
	} else {
		arr[counter] = arr[counter] + inc;
	}
}

exports.parseMessage = function(messageRaw) {

	increment(data.counters, "total");
	
	try {
		// get the message content
		var msg = JSON.parse(messageRaw);
		var status = msg.status;
		
		data.checks[status.uuid] = status;
		
	} catch (e) {
		// some problem there, ignore this message
		logger.error('Error processing message: ' + e.message);
		logger.debug('Stack trace: ' + e.stack);
		logger.debug('Message was: ' + messageRaw);
		increment(data.counters, "invalid");
	}
};

exports.outputRaw = function(arr, callback) {
	increment(data.counters, "request_" + arr);
	if (callback != null) {
		callback ( data[arr] );
		return this;
	} else {
		return data[arr];
	}
};


exports.inject = function(data, callback) {
	var lines = data.split("\n");
	var line;
	
	for (var i=0, length=lines.length; i<length; i++) {
		line = lines[i].trim();
		if (line != "") {
			this.parseMessage(line);
		}
	}
	callback( {status: "OK", injected: length} );
};

exports.statusOverview = function(callback) {
	
	var response = [];
	
	for (key in data.checks) {
		var row = [];
		var check = data.checks[key];
		row.push(check.uuid);
		row.push(check.check_module);
		row.push(check.check_name);
		row.push(check.check_target);
		row.push(check.availability);
		row.push(check.state);
		row.push(check.time);
		row.push(check.duration);
		row.push(check.status);
		response.push(row);
	}
	increment(data.counters, "request_overview");
	callback({aaData: response});
};

exports.datastore = function(ds) {
	data = ds;
	return this;
};

exports.settings = function(s, l) {
	settings = s;
	logger = l;
	return this;
};

exports.flushChecks = function(callback) {
	data.checks = [];
	increment(data.counters, "flushes");
	if (callback != null) callback ( {status: "OK"} );
	return this;
};
