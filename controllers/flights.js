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
        console.log(flight);
        res.redirect('/flights');
    });
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights});
    });
}


function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {title: 'Flight Detail', tickets, flight});
        });
    });
}

function newTicket(req, res) {
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${req.params.id}`);
    });
 }


