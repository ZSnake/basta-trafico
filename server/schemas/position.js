var mongoose = require('mongoose');

var PositionSchema = new mongoose.Schema({
   	latitude: Number,
    longitude: Number
});

module.exports = mongoose.model('Position', PositionSchema);
