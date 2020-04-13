var express = require('express')
var jwt = require('jsonwebtoken')
var router = express.Router()

router.get('/', function(req,res){
    res.render('example4.ejs', {'token':""})
})

router.post('/encode', function(req,res){
    var postHtml = req.body.plain
    var token = jwt.sign({plain:postHtml, exp:Math.floor(Date.now() /1000 + 60)}, 'secret_key')
    console.log(postHtml)
    res.render('example4.ejs', {'token':token})
})

module.exports = router