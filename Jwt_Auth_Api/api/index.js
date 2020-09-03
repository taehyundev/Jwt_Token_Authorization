var express = require("express")
var router = express.Router()

//token
router.post("/auth/login",(req,res)=>{
    res.json(
        {
            "status":"success",
            "message":"hello"
        }
    )
})

module.exports = router;