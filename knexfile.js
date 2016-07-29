module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'rdbs-node',
      user:     'rdbs-node',
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
  },


};
