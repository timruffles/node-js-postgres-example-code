exports.up = function(knex) {

  return knex.schema.createTable('events', function (table) {
    table.increments('id');
    table.string('title').notNullable();
    table.dateTime('startAt').notNullable();
    table.dateTime('endAt').notNullable();
  });

};

exports.down = function() { throw new Error("no revert") };