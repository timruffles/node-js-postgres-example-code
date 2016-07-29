const helper = require("../lib/migrateHelper");

exports.up = function(knex) {

  const createUsers = knex.schema.createTable('users', function (table) {
    table.increments('id');
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
  });

  // we need to wait for users to be created
  // before creating events as it relates to the users table
  const changeEvents = createUsers
  .then(function() {
    return knex.schema.table('events', function (table) {
      table.integer('organizerId')
        .references('users.id')
        .notNullable();
    })
  });

  return changeEvents

  // ELIDE
  .then(() =>
    knex('users').insert([
      {
        id: 1,
        name: "Bob",
        email: "bob@example.com",
      },
      {
        id: 2,
        name: "Amy",
        email: "amy@example.com",
      },
    ]).then(function() {
      return knex('events').insert([
        {
          title: "Nodeschool",
          startAt: helper.stringToDate("2017/02/01 19:30"),
          endAt: helper.stringToDate("2017/02/01 21:30"),
          organizerId: 1,
        },
        {
          title: "PostgreSQL party",
          startAt: helper.stringToDate("2017/06/09 10:00"),
          endAt: helper.stringToDate("2017/06/11 18:30"),
          organizerId: 2,
        },
      ]);
    })

  )
  // END ELIDE

};

exports.down = function() { throw new Error("no revert") };