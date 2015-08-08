var knex = require("../db")

knex("events")
.select("events.*, users.name AS organizerName")
.join('events.organizerId', '=', 'users.id')
.where(function() {
  this.where({
    "organizerName": "Bob",
    "title": "Node school",
  })
  .orWhere({
    "title": "Node Camp",
  })
})
.andWhere("startAt", ">", new Date);