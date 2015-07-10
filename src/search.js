export.simpleTextSearch = function(query, cb) {
  knex("events")
  .where("name LIKE %?%", query)
  .exec(function(err, events) {
    if(err) {
      return console.error("oh no: %s", err);
    }

    console.log(events);
  })
  .exec(cb);
}


export.fullTextSearch = function(query, cb) {
  knex("events")
  .whereRaw("to_tsvector('english', events.title) @@ to_tsquery('english', ?)", query)
  .exec(function(err, events) {
    if(err) {
      return console.error("oh no: %s", err);
    }

    console.log(events);
  })
  .exec(cb);
}