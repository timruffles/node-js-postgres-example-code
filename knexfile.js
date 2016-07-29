module.exports = {

  development: forDb('rdbs_node'),
  testing: forDb('rdbs_node_test'),

};

function forDb(db) {
  return {
    client: 'pg',
    connection: {
      database: db,
      user:     'rdbs_node',
      port: process.env.PG_PORT || 5432,
      password: 'pass',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  }
}
