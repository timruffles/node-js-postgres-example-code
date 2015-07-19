'use strict';

exports.forVersion = function(v, knex, fn) {
  return knex("knex_migrations")
    .select(knex.raw("MAX(SUBSTRING(name from 1 for 2)) as number"))
   .then(function(rows) {
     if(rows.length === 1) {
       var number = rows[0].number;
       if(number === v) {
         console.log("running " + v);
         return fn();
       }
     }
     console.log("skipping " + v);
   });
};

exports.stringToDate = function stringToDate(s) {
  return new Date(Date.parse(s)); 
}
