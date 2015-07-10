var events = require("./events");
var periods = require("periods");

events.create({
  organizerId: 100,
  title: "PostgreSQL JSON datatypes - a beautiful combo",
  startAt: new Date,
  endAt, new Date(new Date().getTime() + periods.hours(1)), 
}, function(err, eventRecord) {

  if(err) {
    console.error("oh dear :" + err);
  } else {
    console.log("My new event id is :" + eventRecord.id);
  }

});