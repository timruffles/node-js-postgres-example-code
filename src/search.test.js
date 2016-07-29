"use strict";
var helper = require("./helpers");

// queries.txt
// search.test.js

var search = require("./search")

describe("simple text search", function() {

  it("finds matching records", function() {
    return search.simpleTextSearch("Node")
    .then((events) => {
      assert(events.length > 0, "should have found some records");
      events.forEach(function(e) {
        assert.match(e.title, /Node/);
      });
    });
  });

  it("misses complex records", function() {
    return search.simpleTextSearch("simple")
    .then(function(events) {

      assert.lengthOf(events, 0, "couldn't find records");

    });
  });

})

// queries.txt
// search.test.js

describe("full text search", function() {

  it("finds matching records", function() {
    return search.fullTextSearch("parties")
    .then(function(events) {

      var foundOne = events.some(function(e) {
        return /party/.test(e.title);
      });

      assert(foundOne, "found a record via stemming");
    });
  });
}) 
