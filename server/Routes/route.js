const express = require("express");
const {sendOTP, signup, login} = require("../controller/Auth")
const router = express.Router();

router.post("/sendotp",sendOTP)
router.post("/signup",signup)
router.post("/login",login)

module.exports = router;