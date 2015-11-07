var mongoose = require('mongoose');

var VehicleSchema = new mongoose.Schema({
   	licenseNumber: String,
    vehicleType: String,
    points: Number,
    positions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Position'}],
    actions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Action'}]
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
