var position = require('../schemas/position');

exports.newPosition = {
	handler: function(request, reply){
		var newPosition = new position({
			latitude: request.payload.latitude,
			longitude: request.payload.longitude
		});
		newPosition.save();
		console.log('position saved');
		return reply('ok');
	}
};

exports.getAll = {
	handler: function(request, reply){
		position.find({}, function(err, positions){
			if(!err){
				reply(positions);
			}else{
				console.log('Error retrieving positions: ' + error);
			};
		});
	}
};
