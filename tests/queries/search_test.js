var search = require("../src/search")

describe("simple text search", function() {

  it("finds matching records", function(done) {
    search.simpleTextSearch("Node", function(err, events) {

      if(err) return done(err);

      events.forEach(function(e) {
        assert.match(e.name, /Node/);
      });

    });
    
  });

  it("misses complex records", function() {
    search.simpleTextSearch("simple", function(err, events) {
      if(err) return done(err);

      assert(events.length > 3, "found some");
      events.forEach(function(e) {
        assert.notMatch(e.name, /simplify/);
      });

    });

  });

})


describe("full text search", function() {

  it("finds matching records", function(done) {
    
    search.fullTextSearch("simple", function(err, events) {
      if(err) return done(err);

      var foundOne = events.some(function(e) {
        return /simplify/.test(e.name);
      });

      assert(foundOne, "found a record via stemming");
    });
  });
})

var attend = require("../src/attend")


describe("attending", function() {

  before(function(done) {
    
  });



})
