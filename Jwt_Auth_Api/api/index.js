var express = require("express")
var router = express.Router()
var auth = require("./auth/auth.router")
var user = require("./user/user.router")
//token 받기
router.use("/auth",auth)
//router.use("/user",user)

module.exports = router;