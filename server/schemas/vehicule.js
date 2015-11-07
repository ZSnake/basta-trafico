var mongoose = require('mongoose');
var position = require('position');

var VehicleSchema = new mongoose.Schema({
   	licenseNumber: String,
    vehicleType: String,
    positions: [{type: mongoose.Schema.Positions.ObjectId, ref: 'Position'}]
});

module.exports = mongoose.model('Vehicule', VehiculeSchema);
