/**
 * exposes the knex object for querying
 */
"use strict";

module.exports = require('knex')(
  require("./knexfile").development
);
