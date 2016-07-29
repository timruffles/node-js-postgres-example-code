var knex = require("../db");

exports.simpleTextSearch = function(query, cb) {
  knex("events")
  .where("name LIKE %?%", query)
  .then(events => console.log(events))
}


exports.fullTextSearch = function(query) {
  return knex("events")
  .whereRaw("to_tsvector('english', events.title) @@ to_tsquery('english', ?)", query)
}