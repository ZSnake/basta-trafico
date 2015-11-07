var hapi = require('hapi');
var mongoose = require('mongoose');
var inert = require('inert');
//var routes = require('./routes');
// Create a server with a host and port
var server = new hapi.Server();
server.connection({
    host: 'localhost',
    port: 3000,
});

mongoose.connect('mongodb://localhost/bastaTrafico');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

server.register(inert, function(err){

	//server.route(routes.endpoints);
  server.route({method: 'GET',
    path: '/{param*}',
    config:
        {
          handler:{
				      directory: {
					           path: ['../client/app', '../client/bower_components']
			        }
  			  }
        }})
	// Start the server

	server.start(function () {
	    console.log('Server running at:', server.info.uri);
	});
});