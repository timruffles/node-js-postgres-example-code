'use strict';

var _ = require("lodash");
var events = require("../../src/events");

module.exports = exports = events;

exports.attend = require("../../src/attend").attend;

exports.homePage = function(f) {
  f(null, [
    {
      id: 10,
      title: "Bongo",
    },
    {
      id: 20,
      title: "Baking",
    },
  ]);
};


