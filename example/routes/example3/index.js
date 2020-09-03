var express = require('express')
var jwt = require('jsonwebtoken')
var router = express.Router()

router.get('/',function(req,res){
    res.render('example3.ejs',{'token':""})
})
router.post('/decode',function(req,res){
    var token = req.body.aaa
    jwt.verify(token, 'secret_key',function(err,decode){
        if(err){
        res.render('example3.ejs', {'token':"Not verify"})
        }
        if(decode){
        res.render('example3.ejs', {'token':decode.plain})
        }
    })
})

router.post('/auth',function(req,res){
    var token = req.body.loginCode
    console.log(token);
    jwt.verify(token, 'secret_key',function(err,decode){
        if(err){
            res.redirect('/');
        }
        if(decode){
        res.render('auth_example.ejs', {'token':decode.plain})
        }
    })
})
module.exports = router;