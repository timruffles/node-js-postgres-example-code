exports.create = function create(data, cb) {
  knex("events")
    .insert(data)
    .returning("id")
    .exec(function(err, ids) {
      if(err) {
        return cb(err);
      } else {
        data.id = ids[0]; 
        cb(null, data);
      }
    });
};

exports.update = function update(id, data, cb) {
  knex("events")
    .where({ id: id })
    .update(data)
    .exec(cb);
};