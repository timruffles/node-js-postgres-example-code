'use strict';

exports.stringToDate = function stringToDate(s) {
  return new Date(Date.parse(s)); 
}
