var knex = require("../db");

exports.nextEvents = function(organizerId, n, cb) {
  knex("events")
    .where({ organizerId: organizerId })
    .orderBy("startAt", "desc")
    .limit(n)
    .exec(cb);
}

exports.eventPage = function(organizerId, pageIndex, pageSize, cb) {
  knex("events")
    .where({ organizerId: organizerId })
    // 'asc' means ascending. This is the default but
    // it never hurts to be explicit in our code!
    .orderBy("startAt", "asc")
    .offset(pageIndex * pageSize)
    .limit((pageIndex + 1) * pageSize)
    .exec(cb);
}

exports.mostPopular = function(organizerId, n, since, cb) {
  knex("events")
    .join("tickets", "tickets.eventId", "events.id")
    .where({ organizerId: organizerId })
    .andWhere("startAt", ">", since)
    .groupBy("events.id")
    .select("events.*, SUM(tickets.id)")
    .exec(cb);
}

exports.attendeesAttendingNEvents = function(organizerId, n, cb) {
  knex("attendees")
    .leftJoin("tickets", "tickets.attendeeId", "attendees.id")
    .groupBy("attendees.id")
    .select("attendees.*, SUM(tickets.id) AS attendanceCount")
    // having allows us to select grouped rows by the results
    // of their aggregate operations. here we're checking
    // that a group has at least a given count of attended events
    .having("attendanceCount >= ?", [n])
    .exec(cb);
}