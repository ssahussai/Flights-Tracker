//define schmas in mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flightSchema = new Schema({
    airline: String,
    flightNo: Number,
    departs: Date
});

//compile schema into a model and export it 
module.exports = mongoose.model('Flight', flightSchema);