var knex = require("../db")

// periods is my npm module which provides functions to
// generate time periods in milliseconds
var periods = require("periods");

var now = new Date;
var inAWeek = new Date(now.getTime() + periods.weeks(1));

knex("events")
.whereBetween("startAt", [now, inAWeek])
.then((rows) => {
  console.log("there are " + rows.length + " events happening next week");
})