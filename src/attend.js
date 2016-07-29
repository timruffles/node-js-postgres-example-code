exports.attend = function(userId, eventId) { 
  return findEvent(eventId)
  .then(function(event) {
    // check we have space
    if(event.capacity === 0) {
      throw Error("no-space");
    }
    
    // if so, create ticket and update counters
    var newTicket = createTicket(userId);
    var updated = updateCapacityCache(eventId);
    
    // when both complete, return the ticket
    return Promise.all([newTicket, updated], ([ticket, _]) => ticket);
  });

  function findEvent() {
    return knex("events")
    .where({ id: eventId })
    .then(([found]) => {
      if(found) return found
      else throw Error(`missing event: ${eventId}`);
    })
  } 

  function createTicket() {
    return knex("tickets").insert({ userId: userId, eventId: eventId })
  } 

  function updateCapacityCache() {
    return knex("events").where("id", eventId).update({
      capacity: "capacity - 1",
    })
  } 
}