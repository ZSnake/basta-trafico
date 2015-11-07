var homeController = require('./controllers/homeController');
var positionsController = require('./controllers/positionsController');

exports.endpoints = [{method: 'GET', path: '/{param*}', config: homeController.home},
                     {method: 'POST', path: '/api/position', config: positionsController.newPosition}];
