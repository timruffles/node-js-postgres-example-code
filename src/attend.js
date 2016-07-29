var find = require("./find");

exports.attend = function(userId, eventId) { 
  return find.byId("events", eventId)
  .then(function(event) {
      // check we have space
      if(event.capacity - event.ticketsIssued > 0) {
          throw new Error("no-space");
      }
      
      // if so, create ticket and update counters
      var newTicket = createTicket(userId);
      var updated = updateCapacityCache(eventId);
      
      return Promise.all([newTicket, updated], function(results) {
        // return the ticket
        return results[0];
      });
  });

  function createTicket() {
    return knex("tickets").insert({ userId: userId, eventId: eventId })
  } 

  function updateCapacityCache() {
    return knex("events").where("id", eventId).update({
      capacity: "capacity - 1",
      ticketsIssued: "ticketsIssued + 1",
    })
  } 
}
