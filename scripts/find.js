var knex = require("../db")

var eventId = 101;

knex("events")
.where("id", eventId)
.exec(function(err, rows) {
  if(err || rows.length === 0) {
    console.error(err || "event not found");
  } else {
    console.log(rows[0]);
  }
})