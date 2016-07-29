const knex = require("../db")

knex("events")
.select("events.*", "users.name")
.join('users', 'organizerId', '=', 'users.id')
.then(formatOutput);

function formatOutput(eventsWithOrganizerNames) {
  eventsWithOrganizerNames.forEach(function(row) {

    const startAt = row.startAt;
    // in JS months are 0 indexed, but days are 1 indexed. yay!
    const humanMonth = startAt.getUTCMonth() + 1;
    const date = [startAt.getUTCFullYear(), humanMonth, startAt.getUTCDate()].join("/");

    console.log(`${row.name} is organizing ${row.title} on ${date}`);

  });
}