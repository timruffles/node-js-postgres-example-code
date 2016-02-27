"use strict";
var helper = require("./helper");

describe(function() {
  before(function(done) {
    helper.migrateTo("src", done);
  });

// interesting-queries.txt
// src/event-reporting.js

exports.mostPopular = function(organizerId, n, since, cb) {
  knex("events")
    .join("tickets", "tickets.eventId", "events.id")
    .where({ organizerId: organizerId })
    .andWhere("startAt", ">", since)
    .groupBy("events.id")
    .select("events.*, SUM(tickets.id)")
    .exec(cb);
}
});