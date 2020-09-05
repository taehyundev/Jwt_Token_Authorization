const mysql = require("mysql")
require("dotenv").config()

module.exports = mysql.createPool({
    host : process.env.HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    connectionLimit : 40
})