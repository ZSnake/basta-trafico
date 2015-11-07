var homeController = require('./controllers/homeController');
var positionsController = require('./controllers/positionsController');
var vehiclesController = require('./controllers/vehiclesController');
var actionsController = require('./controllers/actionsController');

exports.endpoints = [{method: 'GET', path: '/', handler: function(request, reply){return reply('hello')}},
                     {method: 'POST', path: '/api/position/{vehicleId}', config: positionsController.newPosition},
                     {method: 'GET', path: '/api/positions/{vehicleId}', config: positionsController.getAllByVehicle},
                     {method: 'POST', path: '/api/vehicle', config: vehiclesController.newVehicle},
                     {method: 'GET', path: '/api/vehicle/{vehicleId}', config: vehiclesController.getVehicleById},
                     {method: 'PUT', path: '/api/action/{vehicleId}', config: actionsController.newAction}];
