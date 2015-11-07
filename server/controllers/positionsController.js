var position = require('../schemas/position');
var vehicle = require('../schemas/vehicle')
exports.newPosition = {
	handler: function(request, reply){
		var newPosition = new position({
			latitude: request.payload.latitude,
			longitude: request.payload.longitude,
			time: request.payload.time
		});
		newPosition.save(function(err){
			if(err)
				console.log('Error saving new position: ' + err);
		})
		vehicle.findByIdAndUpdate(request.params.vehicleId,
			{$push: {positions: newPosition}}, function(err, model){
				if(err)
					console.log('Error: ' + err);
			});
		console.log('position saved');
		return reply('ok');
	}
};

exports.getAllByVehicle = {
	handler: function(request, reply){
		vehicle.find({_id: request.params.vehicleId}, function(err, vehicle){
			if(!err){
				console.log(vehicle[0].positions);
				return reply(vehicle[0].positions);
			}
			else {
				console.log('Error retrieving vehicle: ' + err);
			}
		})
	}
};
