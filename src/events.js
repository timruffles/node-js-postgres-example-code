exports.create = function create(data) {
  return knex("events")
    .insert(data)
    .returning("id")
    .then(function(ids) {
      data.id = ids[0]; 
    });
};

exports.update = function update(id, data) {
  return knex("events")
    .where({ id: id })
    .update(data)
};