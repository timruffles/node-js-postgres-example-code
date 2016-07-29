var helper = require("./helpers");

describe("Sanity check", function() {

  it("is using a recent version of node", function() {
    eval("`hello`");
  })

  it("can connect to the datasbase", function() {
    return helper.knex.raw("select 1 + 1 as result");
  })

  it("is using a version of postgres that supports jsonb", function() {
    return helper.knex.raw("select '[]'::jsonb as result");
  })


    
})
