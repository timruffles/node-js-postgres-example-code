const knex = require("../db")

knex("events")
.select("events.*", "users.name")
.join('users', 'organizerId', '=', 'users.id')
.then(formatOutput);