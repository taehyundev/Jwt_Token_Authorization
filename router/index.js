var login = require('./login/index')
var example1 = require('./example1/index')
var example2 = require('./example2/index')
var example3 = require('./example3/index')
var example4 = require('./example4/index')
var express = require('express')
var router = express.Router()

router.get('/', function(req,res){
    console.log("Sucesss")
    res.render('main.ejs')
})

router.use('/login', login)
router.use('/example1',example1)
router.use('/example2',example2)
router.use('/example3',example3)
router.use('/example4',example4)
module.exports = router