'use strict';

var jade = require("jade");
var express = require("express");

var app = express();

app.set('views', __dirname + '/../views');
app.set('view engine', 'jade');

app.use(require("cookie-parser")())
app.use(fakeUser);

var PORT = process.env.PORT || 3000;

var MODULES = [
  require("./home"),
  require("./eventsCrud"),
  require("./users"),
  require("./attend"),
];

MODULES.forEach(function(module) {
  var routes = module.routes;

  routes.forEach(function(setup) {
    var verb = setup[0]; 
    var path = setup[1]; 
    var handler = setup[2]; 
    var middleware = setup[3] || []; 

    app[verb].apply(app, [path].concat(middleware.concat(handler)));
  });
});

if(require.main === module) {
  app.listen(PORT, function() {
   console.log("listening on " + PORT);
  });
} else {
  module.exports = exports = server;
}

function fakeUser(req, res, next) {
  // as we're not bothering with authentication, just
  // set every request to the same user
  req.user = {
    id: 1,
  };

  next();
}
