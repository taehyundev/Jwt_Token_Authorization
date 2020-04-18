var express = require('express')
var router = express.Router()
var jwt = require('jsonwebtoken')

router.get('/', function(req,res){
    res.render('example2.ejs', {'token':""})
})

router.post('/encode', function(req,res){
    var postHtml = req.body
    var token = jwt.sign(postHtml, 'secret_key');
    console.log(postHtml)
    res.render('example2.ejs', {'token':token})
})
module.exports = router