"use strict";

var users = require("./users");

exports.routes = [
  ["get",  "/sign-up"       , show],
  ["get",  "/login"         , show],
  ["post", "/users/new"     , create],
  ["post", "/sessions/new"  , login],
];

function show(req, res, next) {

}

function create(req, res, next) {
  
}

function login(req, res, next) {
  
}
