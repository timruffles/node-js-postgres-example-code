exports.up = function(knex, Promise) {

  var createUsers = knex.schema.createTable('users', function (table) {
    table.increments('id');
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
  });

  // we need to wait for users to be created
  // before creating events as it relates to the users table
  var changeEvents = createUsers
  .then(function() {
    return knex.schema.table('events', function (table) {
      table.integer('userId')
        .references('users.id')
        .notNullable();
    })
  });

  return changeEvents;

};

exports.down = function() { throw new Error("no revert") };