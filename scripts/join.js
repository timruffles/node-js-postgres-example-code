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
    var date = [startAt.getUTCFullYear(), startAt.getUTCMonth() + 1, startAt.getUTCDate()].join("/");
    console.log(row.organizerName + " is organizing '" + row.title + "' on " + date);
  });
}