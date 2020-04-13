var login = require('./login/index')
var example1 = require('./example1/index')
var example2 = require('./example2/index')
var express = require('express')
var router = express.Router()

router.get('/', function(req,res){
    console.log("Sucesss")
    res.render('main.ejs')
})

router.use('/login', login)
router.use('/example1',example1)
router.use('/example2',example2)
module.exports = router