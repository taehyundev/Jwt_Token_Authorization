var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var router = require('./routes/index')
const users = require('./routes/api/users');
app.listen(3000, function(){
    console.log("Server! start")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) 

app.set('view engine', 'ejs')
app.use(router)
