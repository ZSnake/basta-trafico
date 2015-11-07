var vehicle = require('../schemas/vehicle');

exports.newVehicle = {
	handler: function(request, reply){
		var newPosition = new vehicle({
			licenseNumber: request.payload.licenseNumber,
	    vehicleType: request.payload.vehicleType,
	    positions: [],
			points: 0
		});
		newPosition.save();
		console.log('position saved');
		return reply('ok');
	}
};

exports.getVehicleById = {
	handler: function(request, reply){
		vehicle.find({_id: request.params.vehicleId}, function(err, vehicle){
			if(!err){
				console.log(vehicle);
				return reply(vehicle);
			}
			else {
				console.log("Error retrieving vehicle: " + err);
			}
		});
		console.log(request.params.vehicleId);
	}
}
