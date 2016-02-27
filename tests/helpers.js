"use strict";

var Migrator = require("knex/lib/migrate");
var _ = require("lodash");

var knex = exports.knex = require("../db");


exports.migrateTo = function(target) {
  var m = new Migrator(knex);
  return;
  clearDb()
  .then(_.partial(migrate, target))
  .then(function() {
    return seed(target);
  });
}

function getMigrations() {
  
}

function clearDb() {
  // select * from information_schema.tables where table_schema = 'public'
  return knex("information_schema.tables")
  .select("table_name")
  .where("table_schema", 'public')
  .then(function(tables) {
    var drop = tables.map(function(t) {
      return knex.schema
      // TODO disable foreign key constraints
      .raw("something to disable keys")
      .dropTable(t.table_name);
    });

    // drop tables
    return Promise.all(drop);
  });
}

function migrate() {
  
}

function seed() {
  
}

if(require.main === module) {
  exports.migrateTo();
}
