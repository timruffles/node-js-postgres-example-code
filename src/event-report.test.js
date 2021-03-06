"use strict";
var helper = require("./helpers");

// interesting-queries.txt
// event-report.test.js
var reporting = require("./event-reporting")

describe("eventPage", function() {

  it("can fetch first page", function() {
    return reporting.eventPage(100, 0, 10, function(rows) {
      assert.length(rows, 10);
    });
  });

  it("can fetch middle page", function() {
    return reporting.eventPage(100, 1, 10, function(rows) {
      assert.length(rows, 10);
    });
  });

  it("can last page", function() {
    return reporting.eventPage(100, 2, 10, function(rows) {
      assert.length(rows, 5);
    });
  });

  it("returns empty set for > last page", function() {
    return reporting.eventPage(100, 2, 10, function(rows) {
      assert.length(rows, 0);
    });
  });
}) 
