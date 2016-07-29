var knex = require("../db")

var eventId = 101;

knex("events")
.where("id", eventId)
.then(rows) => {
  if(rows.length === 0) {
    console.error(err || "event not found");
  } else {
    console.log(rows[0]);
  }
})