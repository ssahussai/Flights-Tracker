//define schmas in mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    },
    arrival: {
        type: Date,
    }
}, {
    timestamps: true
});

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        require: true, 
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: new Date().setFullYear(new Date().getFullYear()+1)
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        default: 'SAN'
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

//compile schema into a model and export it 
module.exports = mongoose.model('Flight', flightSchema);