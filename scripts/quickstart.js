const knex = require("../db")

knex("events")
// once our results come in, we'll log them out
.then(rows => {

  for(const row of rows) {
    console.log(`${row.name} from ${row.startAt} until ${row.endAt}`);
  }

})
// if we have any issues, we'll deal with them here:
.catch(err => 
  console.error("oh dear, I think our database is down: " + err));