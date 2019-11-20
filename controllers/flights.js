var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = { 
   new: newFlight,
   create,
   index, 
   show,
   newTicket
};

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    });
}

function index(req, res) {
    Flight.find({}).lean().exec(function(err, flights) {
        flights.forEach(f => f.departs = f.departs.toLocaleDateString());
        res.render('flights/index', {flights});
    });
}

function show(req, res) {
    Flight.findById(req.params.id).lean().exec(function(err, flight) {
        flight.departs = flight.departs.toLocaleDateString();
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {title: 'Flight Detail', tickets, flight});
        });
    });
}

function newTicket(req, res) {
    Ticket.create({...req.body, flight: req.params.id }, function(err, ticket) {
        res.redirect(`/flights/${req.params.id}`);
    });
 }


