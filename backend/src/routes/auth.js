const express = require("express")
const router = express.Router()

const authController = require("../controllers/authController")

// route to create new user (register)
router.post("/register", authController.registerHandle)

// route to login into system
router.post("/login", authController.loginHandle)


module.exports = router