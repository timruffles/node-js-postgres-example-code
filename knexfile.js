module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'rdbs-node',
      user:     'rdbs-node',
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
