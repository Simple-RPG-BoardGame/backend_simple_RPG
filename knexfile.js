// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/db.db3'
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    pool: {
      afterCreate: (connection, done) => {
        connection.run("PRAGMA foreign_keys = on", done)
      }
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

	production: {
		client: "pg",
		connection: pgConnection,
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: __dirname + "/database/migrations",
		},
		seeds: {
			directory: __dirname + "/database/seeds",
		},
	},

};
