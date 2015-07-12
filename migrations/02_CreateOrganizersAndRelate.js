exports.up = function(knex, Promise) {

  var createOrganizers = knex.schema.createTable('organizers', function (table) {
    table.increments('id');
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
  });

  // we need to wait for organizers to be created
  // before creating events as it relates to the organisers table
  var changeEvents = createOrganizers
  .then(function() {
    return knex.schema.table('events', function (table) {
      table.integer('organizer_id')
        .references('organizers.id')
        .notNullable();
    })
  });

  return changeEvents;
  
};

exports.down = function() { throw new Error("no revert") };