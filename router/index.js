var login = require('./login/index')
var express = require('express')
var router = express.Router()

router.get('/', function(req,res){
    console.log("Sucesss")
    res.render('main.ejs')
})

router.use('/login', login)

module.exports = router