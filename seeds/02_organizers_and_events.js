'use strict';

var helper = require("../scripts/seed-helper");

exports.seed = function(knex, Promise) {
  return helper.forVersion("02", knex, function() {
    // use delete not truncate, as truncate
    // doesn't check rows & therefore can't run on foreign key target table
    return knex('events')
    .delete()
    .then(function() {
      return knex('organizers')
        .delete()
    })
    .then(function() {
      return knex('users').insert([
        {
          id: 1,
          name: "Bob",
          email: "bob@example.com",
        },
        {
          id: 2,
          name: "Amy",
          email: "amy@example.com",
        },
      ]).then(function() {
        return knex('events').insert([
          {
            title: "Nodeschool",
            startAt: helper.stringToDate("2017/02/01 19:30"),
            endAt: helper.stringToDate("2017/02/01 21:30"),
            organizerId: 1,
          },
          {
            title: "PostgreSQL party",
            startAt: helper.stringToDate("2017/06/09 10:00"),
            endAt: helper.stringToDate("2017/06/11 18:30"),
            organizerId: 2,
          },
        ]);
      })

    })
  });
};
