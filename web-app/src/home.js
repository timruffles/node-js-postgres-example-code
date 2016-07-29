'use strict';

var events = require("./events");

exports.routes = [
  ["get", "/", home],
];

function home(req, res, next) {
  
  events.homePage(function(err, events) {
    
    if(err) {
      return next(err);
    }

    res.render("home", { events: events });
    
  });
  
}
