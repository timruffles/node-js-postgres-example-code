var db = require("../db");
require("../seeds/" + process.argv[2]).seed(db)
  .then(function() {
    console.error("seed data installed");
    process.exit(0);
  }, function(err) {
    console.error("failed to install seed data: " + err);
    process.exit(1);
  })
