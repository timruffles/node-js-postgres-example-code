"use strict";

var runAttend = require("./events").attend;

exports.routes = [
  ["post",  "/events/:id/tickets", attend],
];

function attend(req, res, next) {

  var eventId = req.params.eventId;
  var userId = req.user.id;
  
  return runAttend(userId, eventId)
  .then(function(ticket) {
    res.send(ticket).end();
  })
  .catch(next);
}
