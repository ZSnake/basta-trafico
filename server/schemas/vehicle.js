var mongoose = require('mongoose');
var position = require('./position');

var VehicleSchema = new mongoose.Schema({
   	licenseNumber: String,
    vehicleType: String,
    points: Number,
    positions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Position'}]
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
