exports.buyTickets = function(userId, tickets, cb) {
  return knex.transaction(function(trx) {

    var purchase = createPurchaseForTickets(trx, tickets);

    var tickets = purchase.then(function(purchase) {
      return createTickets(trx, tickets, purchase);
    });

  });

  function createPurchaseForTickets(knex, tickets) {
    return knex("purchases")  
    .insertOne({
      userId: userId,
      amount: _.reduce(tickets, function(ticket) {
        return ticket.quantity * ticket.price;
      }, 0)
    })
     
  }

  function createTickets(knex, tickets, purchase) {
    var records = tickets.map(function(ticket) {
      return {
        userId: userId,
        purchaseId: purchase.id,
        quantity: ticket.quantity,
        price: ticket.price,
      };
    });

    return knex("tickets")
    .insert(records);
  }
});

