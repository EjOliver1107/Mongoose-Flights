const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    
}


function newTicket(req, res){
    res.render('tickets/new', {flightId: req.params.id})
}

function create(req, res){
    const ticket = new Ticket(req.body);
    ticket.save(function(err){
        if (err) return res.render('tickets/new');
        console.log(ticket);
        console.log(req.body);
        res.redirect('/flights');
    })
}


