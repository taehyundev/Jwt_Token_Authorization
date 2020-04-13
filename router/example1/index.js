var express = require('express')
var router = express.Router()
var jwt = require('jsonwebtoken'); // module import
var defaultInfo = {sub: 'taehyundev'} 
var token = jwt.sign(defaultInfo, 'secret_key');
    
router.get('/', function(req,res){
    console.log("example 1 Check")
    var info ={'defaultInfo':defaultInfo.sub,'token':token}
    console.log(info)
    var decoded_data = jwt.verify(token, 'secret_key');
    res.render('example1.ejs',info );
})

module.exports = router;