var express = require('express')
var models = require('../../config/jwt')
var router = express.Router()

router.get('/', function(req,res){
    res.render('login.ejs')
})

module.exports = router