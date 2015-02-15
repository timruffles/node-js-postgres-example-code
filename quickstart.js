var knex = require("./db")

knex("events")
.exec(function(err, rows) {
  if(err) {
    console.error("oh dear, I think our database is down: " + err);
  } else {
    console.log("we have " + rows.length + " events:");
    rows.forEach(function(row) {
      console.log(row.name + " from " + row.startAt  + " until " + row.endAt);
    });
  }
});
