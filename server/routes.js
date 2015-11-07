var homeController = require('./controllers/homeController');
var positionsController = require('./controllers/positionsController');
var vehiclesController = require('./controllers/vehiclesController');

exports.endpoints = [{method: 'GET', path: '/{param*}', config: homeController.home},
                     {method: 'POST', path: '/api/position/{vehicleId}', config: positionsController.newPosition},
                     {method: 'GET', path: '/api/positions/{vehicleId}', config: positionsController.getAllByVehicle},
                     {method: 'POST', path: '/api/vehicle', config: vehiclesController.newVehicle},
                     {method: 'GET', path: '/api/vehicle/{vehicleId}', config: vehiclesController.getVehicleById},
                     {method: 'PUT', path: '/api/vehicle/{vehicleId}/changePoints', config: vehiclesController.changePoints}];
