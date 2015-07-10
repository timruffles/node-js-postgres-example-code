exports.up = function(knex, Promise) {

  var createOrganizers = knex.schema.createTable('organizers', function (table) {
    table.increments('id');
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
  });

  var changeEvents = knex.schema.table('events', function (table) {
    table.increments('id');
    table.integer('organizer_id')
      .references('organizers.id')
      .notNullable();
  });

  // tell knex to make sure all our work is done:
  // both creating our new organizers table, and updating the
  // old events table
  return Promise.all([createOrganizers, changeEvents]);
  
};

exports.down = function() { throw new Error("no revert") };