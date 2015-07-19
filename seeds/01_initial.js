'use strict';

var helper = require("../scripts/seed-helper");

exports.seed = function(knex) {

  return helper.forVersion("01", knex, function() {
    // clean out the initial data
    return knex('events')
      .truncate()
      .then(function() {

        return knex('events').insert([
          {
            title: "Nodeschool",
            startAt: helper.stringToDate("2017/02/01 19:30"),
            endAt: helper.stringToDate("2017/02/01 21:30"),
          },
          {
            title: "Node Camp",
            startAt: helper.stringToDate("2017/06/09 10:00"),
            endAt: helper.stringToDate("2017/06/11 18:30"),
          },
        ]);

      });
  });
};

