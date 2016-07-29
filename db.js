/**
 * exposes the knex object for querying
 */
"use strict";

module.exports = require('knex')(
  require("./knexfile")[process.env.NODE_ENV]
);
