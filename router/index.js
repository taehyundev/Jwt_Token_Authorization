var express = require('express')
var router = express.Router()

router.get('/', function(req,res){
    console.log("Sucesss")
    res.render('main.ejs', {'user': 'kang'})
})

module.exports = router