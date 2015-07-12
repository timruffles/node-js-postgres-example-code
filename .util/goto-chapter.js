"use strict";

var Promise = require("bluebird");

if(require.main === module) {
  main();
}

module.exports = exports = gotoChapter;

function main() {
  var chapter = process.argv[2];

  gotoChapter(chapter);
    .catch(function(err) {
      console.error(err.stack);
    });
}

function gotoChapter(chapter) {
  return clearDatabase()
    .then(runMigrations)
    .then(runSeed)
}

function clearDatabase() {
  return Promise.all([
    knex.schema.dropTable('events').catch(notFound)
    , knex.schema.dropTable('organizers').catch(notFound)
    , knex.schema.dropTable('attendees').catch(notFound)
    , knex.schema.dropTable('tags').catch(notFound)
    , knex.schema.dropTable('knex_migrations').catch(notFound)
  ]);
}

function runMigrations() {
  
}

function runSeed() {
  
}

function notFound(e) {
  return false; 
}


