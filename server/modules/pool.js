const pg = require('pg');
const Pool = pg.Pool;

const DATABASE_NAME = 'music_library';
const config = {
    database: DATABASE_NAME, // the name of the database to connect to
    host: 'localhost', //Where the db is located
    port: 5432, // default PORT for the localhost POSTGRES db
    max: 10, // max number of connections to the db kept up at a time
    idleTimeoutMillis: 30000 // 30 seconds to connect and timeout
}

// Make the ddb connection pool
const pool = new Pool(config);

// log successfull connection
pool.on('connect', (client) => {
    console.log(`connected to database POOL ${DATABASE_NAME}`);
})

// handle errors for clients that have been idle for too long
pool.on('error', (err, client) => {
    console.log(`ERROR with database POOL connection from ${client}, error from ${err}`);
    process.exit(-1);
})

module.exports = pool;
