var knex = require("./db")

knex("events")
.select("events.*, organizers.name")
.join('events.organizer_id', '=', 'organizers.id')
.exec(function(err, rows) {
  if(err) {
    console.error("oh dear: " + err);
  } else {
    formatOutput(rows);
  }
});

function formatOutput(eventsWithOrganizerNames) {
  eventsWithOrganizerNames.forEach(function(row) {
    var startAt = row.startAt;
    // in JS months are 0 indexed, but days are 1 indexed. yay!
    var humanMonth = startAt.getUTCMonth() + 1;
    var date = [startAt.getUTCFullYear(), humanMonth, startAt.getUTCDate()].join("/");
    console.log(row.organizerName + " is organizing '" + row.title + "' on " + date);
  });
}