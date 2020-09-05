var express = require("express")
var router = express.Router()

router.post("/login",(req,res)=>{
    res.json(
        {
            "status":"success",
            "message":"hello"
        }
    )
})

module.exports = router;