const { createPool } = require("mysql2/promise");
const { DB_HOST, DB_USER, DB_DATABASE, DB_PASSWORD, DB_PORT } = require("./config.js");



module.exports.pool = createPool({ 
    host:DB_HOST,
    user: DB_USER,
    port: DB_PORT,
    password: DB_PASSWORD,
    database: DB_DATABASE
});


