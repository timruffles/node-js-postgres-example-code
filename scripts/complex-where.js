knex("events")
.select("events.*, organizers.name AS organizerName")
.join('events.organizerId', '=', 'organizers.id')
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