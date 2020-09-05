const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const api = require("./api/index")
const db_pool = require("./config/db_pool")
const db_conn = require("./config/db_conn")
require("dotenv").config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use("/api", api)

app.listen(process.env.PORT,()=>{
    db_conn.connect()
    console.log("server connect port ::", process.env.PORT)
})

db_conn.on("connect",()=>{
    console.log("db connect !")
})