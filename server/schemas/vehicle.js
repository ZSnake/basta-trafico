var mongoose = require('mongoose');
var position = require('./position');

var VehicleSchema = new mongoose.Schema({
   	licenseNumber: String,
    vehiculeType: String,
    point: Number,
    positions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Position'}]
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
