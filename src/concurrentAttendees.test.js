
// concurrentAttendees.test.js
const attend = require("./attend");
const helper = require("./factory");

describe("system's handling of many people buying tickets", function() {

  before(function() {
    return Promise.all(
      Array.fill({ length: 5 }, (_, i) => i)
      .map(runScenario)
      .then(() => knex("events")
        .where("title", "like", "concurrent %"))
    )

    function runScenario(scenarioId) {
      Promise.all(
        createAttendees(),
        createEvent({
          title: `concurrent ${scenarioId}`,
          capacity: 2,
        })
      )
      .then(([attendees, event]) => 
        Promise.all(
          attendees
          .map(a => attend({ userId: a.id, eventId: event.id }))
        )
      )
    }
  });

});
