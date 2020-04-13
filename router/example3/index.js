var express = require('express')
var jwt = require('jsonwebtoken')
var router = express.Router()

router.get('/',function(req,res){
    res.render('example3.ejs',{pain:""})
})
router.post('/decode',function(req,res){
    var token = req.body.aaa
    var decoded = jwt.verify(token, 'secret_key')
    
    res.render('example3.ejs',{pain:decoded.plain})
})


module.exports = router;