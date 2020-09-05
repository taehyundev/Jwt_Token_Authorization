let jwtObj = {};
require("dotenv").config()

jwtObj.secrect = process.env.JSON_SECRET_KEY

module.exports = jwtObj 