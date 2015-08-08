"use strict";

var knex = require("../db")


exports.byId = function(table, id) {
  return knex(table)
   .where({
     id: id,
   })
   .then(function(results) {
     if(results.length === 1) {
       return results[0]
     } else if (results.length > 1) {
       throw new Error("id-not-unique");
     } else {
       throw new Error("record-not-found");
     }
   });
};
