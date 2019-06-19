// const pg = require('pg');
// const url = require('url');
// let config = {};

// if (process.env.DATABASE_URL) {
//     let params = url.parse(process.env.DATABASE_URL);
//     let auth = params.auth.split(':');

//     config = {
//         user: auth[0],
//         password: auth[1],
//         host: params.hostname,
//         port: params.port,
//         database: params.pathname.split('/')[1],
//         ssl: true,
//         max: 10,
//         idleTimeoutMillis: 30000,
//     };

// } else {
//     config = {
//         user: process.env.PG_USER || null,
//         password: process.env.DATABASE_SECRET || null,
//         host: process.env.DATABASE_SERVER || 'localhost',
//         port: process.env.DATABASE_PORT || 5432,
//         database: process.env.DATABASE_NAME || 'coffee',
//         max: 10,
//         idleTimeoutMillis: 30000,
//     };
// }

// module.exports = new pg.Pool(config);

const pg = require('pg');
const url = require('url');
let config = {};

if (process.env.DATABASE_URL) {
  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true, // heroku requires ssl to be true
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };
} else {
  config = {
    host: 'localhost', // Server hosting the postgres database
    port: 5432, // env var: PGPORT
    database: 'bloom', // CHANGE THIS LINE! env var: PGDATABASE, this is likely the one thing you need to change to get up and running
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };
}

// this creates the pool that will be shared by all other modules
const pool = new pg.Pool(config);

// the pool will log when it connects to the database
pool.on('connect', () => {
  console.log('Postgesql connected');
});

// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err) => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = new pg.Pool(config);
