process.env.NODE_ENV = 'testing';

// expose chai to avoid requiring on every test
global.assert = require("chai").assert;
