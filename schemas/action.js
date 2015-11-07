var mongoose = require('mongoose');

var ActionSchema = new mongoose.Schema({
   	points: Number,
    reason: String,
});

module.exports = mongoose.model('Action', ActionSchema);
