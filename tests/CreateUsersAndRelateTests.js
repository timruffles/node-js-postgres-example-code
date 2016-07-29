"use strict";
var helper = require("./helpers");

describe("CreateUsersAndRelate", function() {
  before(function(done) {
    helper.migrateTo("CreateUsersAndRelate", done);
  });

// queries.txt
// CreateUsersAndRelate

var search = require("../src/search")

describe("simple text search", function() {

  it("finds matching records", function() {
    return search.simpleTextSearch("Node")
    .then((events) => {
      events.forEach(function(e) {
        assert.match(e.name, /Node/);
      });
    });
  });

  it("misses complex records", function() {
    return search.simpleTextSearch("simple")
    .then(function(events) {

      assert(events.length > 3, "found some");
      events.forEach(function(e) {
        assert.notMatch(e.name, /simplify/);
      });

    });
  });

})


// queries.txt
// CreateUsersAndRelate

describe("full text search", function() {

  it("finds matching records", function() {
    return search.fullTextSearch("simple")
    .then(function(events) {

      var foundOne = events.some(function(e) {
        return /simplify/.test(e.name);
      });

      assert(foundOne, "found a record via stemming");
    });
  });
})

// transactions.txt
// CreateUsersAndRelate

var attend = require("../src/attend")


describe("attending", function() {

  before(function() {
    
  });



})
 
});
