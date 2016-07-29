const knex = require("../db");

exports.simpleTextSearch = function(query, cb) {
  return knex("events")
    .where('title', 'like', `%${query}%`)
}

exports.fullTextSearch = function(query) {
  return knex("events")
  .whereRaw("to_tsvector('english', events.title) @@ to_tsquery('english', ?)", query)
}