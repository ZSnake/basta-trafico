var vehicle = require('../schemas/vehicle');
var action = require('../schemas/action');

exports.newAction = {
  handler: function(request, reply){
    var newAction = new action({
      points: request.payload.points,
      reason: request.payload.reason
    });
    newAction.save(function(err){
      if(err)
        console.log('Error saving action: ' + err);
    })
    vehicle.update({
      _id: request.params.vehicleId
    }, {$inc: {
      points: request.payload.points
    }, $push: {actions: newAction}}, function(err){
      if(err)
       console.log("Error editing vehicles points: " + err);
      return reply('ok');
    })
  }
}
