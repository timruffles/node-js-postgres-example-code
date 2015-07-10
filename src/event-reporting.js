var knex = require("../db");

exports.nextEvents = function(organiserId, n, cb) {
  knex("events") 
    .where({ organiserId: organiserId })
    .orderBy("startAt", "desc")
    .limit(n)
    .exec(cb);
}

exports.eventPage = function(organiserId, pageIndex, pageSize, cb) {
  knex("events") 
    .where({ organiserId: organiserId })
    .orderBy("startAt", "asc")
    .offset(pageIndex * pageSize)
    .limit((pageIndex + 1) * pageSize)
    .exec(cb);
}

exports.mostPopular = function(organiserId, n, since, cb) {
  knex("events") 
    .join("tickets", "tickets.eventId", "events.id")
    .where({ organiserId: organiserId })
    .andWhere("startAt", ">", since)
    .groupBy("events.id")
    .select("events.*, SUM(tickets.id)")
    .exec(cb);
}

exports.attendeesAttendingNEvents = function(organiserId, n, cb) {
  knex("attendees")
    .leftJoin("tickets", "tickets.attendeeId", "attendees.id")
    .groupBy("attendees.id")
    .select("attendees.*, SUM(tickets.id) AS attendanceCount")
    .having("attendanceCount > ?", [n])
    .exec(cb);
}