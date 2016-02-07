/*
 * Required packages
 */
var express = require('express');
var path = require('path');
var fs = require('fs');

var routes = require('./server/routes');
/*
 * Create an express server
 */
var app = express();
/*
 * Set the port to be 3000 by default or the process' port
 */
app.set('port', (process.env.PORT || 3000));

/*
 * Allow all static files to be served
 */
app.use(express.static(path.join(__dirname, 'client')));

app.use('/', routes);

/*
 * Default route - we will not be needing any back-end parsing
 */
app.get('*', function(request, response) {
	response.sendFile(path.join(__dirname, 'client', 'index.html'));
});

/*
 * Start the server
 */
app.listen(app.get('port'), function() {
	console.log('server started');
});