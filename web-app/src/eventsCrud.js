"use strict";

var events = require("./events");

var PREFIX = "/events";

exports.routes = [
  ["get",  PREFIX + "/:id", show],
  ["post", PREFIX         , create],
  ["post", PREFIX + "/:id", update],
];

function show(req, res, next) {

  res.render("events/show", { event: {
    id: 10,
    title: "fish",
  } });

}

function create() {
  
}

function update() {
  
}
