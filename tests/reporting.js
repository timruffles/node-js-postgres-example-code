var reporting = require("../src/event-reporting")

describe("eventPage", function() {

  it("can fetch first page", function(done) {
    reporting.eventPage(100, 0, 10, stripError(done, function(rows) {
      assert.length(rows, 10);
      done();
    }));
  });

  it("can fetch middle page", function(done) {
    reporting.eventPage(100, 1, 10, stripError(done, function(rows) {
      assert.length(rows, 10);
      done();
    }));
  });

  it("can last page", function(done) {
    reporting.eventPage(100, 2, 10, stripError(done, function(rows) {
      assert.length(rows, 5);
      done();
    }));
  });

  it("returns empty set for > last page", function(done) {
    reporting.eventPage(100, 2, 10, stripError(done, function(rows) {
      assert.length(rows, 0);
      done();
    }));
  });
})

function stripError(done, fn) {
  return function(err) {
    if(err) return done(err);
    fn.apply(null, [].slice.call(arguments, 1));
  }
}


