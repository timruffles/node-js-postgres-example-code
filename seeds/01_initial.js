'use strict';

exports.seed = function(knex) {

  // clean out the initial data
  return knex('events')
    .truncate()
    .then(function() {

      return knex('events').insert([
        {
          title: "Nodeschool",
          startAt: stringToDate("2017/02/01 19:30"),
          endAt: stringToDate("2017/02/01 21:30"),
        },
        {
          title: "Node Camp",
          startAt: stringToDate("2017/06/09 10:00"),
          endAt: stringToDate("2017/06/11 18:30"),
        },
      ]);

    });
};

function stringToDate(s) {
  return new Date(Date.parse(s)); 
}
