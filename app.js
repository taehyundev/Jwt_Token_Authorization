var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var router = require('./router/index')

app.listen(3000, function(){
    console.log("Server! start")
})

app.use(router)
