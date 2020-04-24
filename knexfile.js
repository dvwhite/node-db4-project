// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      folder: './data/migrations'
    },
    seeds: {
      folder: './data/seeds'
    },
    
  },

};
