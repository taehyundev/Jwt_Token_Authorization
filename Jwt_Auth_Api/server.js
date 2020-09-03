const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const api = require("./api/index")
require("dotenv").config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use("/api", api)

app.listen(process.env.PORT,()=>{
    console.log("server connect port ::", process.env.PORT)
})