"use strict";

var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
var gotoChapter = require("./goto-chapter");

if(require.main === module) {
  main();
}

function main() {
  loadChapters()
    .then(testChapters)
}

function testChapters(chapters) {

  return new Promise(function(resolve, reject) {

    
    
  });
}

function testChapter(chapter) {
  return gotoChapter(chapter)
    .then(runTests)
}

function runTests() {
  
}
