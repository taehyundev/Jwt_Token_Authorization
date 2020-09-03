var express =require('express')
var router = express.Router()
var jwt = require('jsonwebtoken')
var exampleID ="kang4030"
var examplePW ="1234"

router.get('/', function(req,res){
    res.render('login.ejs')
})


router.post('/', function(req,res){
    var reqID  = req.body.ID
    var reqPW  = req.body.PW

    if(exampleID === reqID && examplePW === reqPW){
        var token = jwt.sign({plain:reqPW, exp:Math.floor(Date.now() /1000 + 60)}, 'secret_key')
        
        res.render('example4.ejs', {'token':token})
    }else{
        console.log("err")
        res.render('login.ejs')
    }
})

module.exports = router