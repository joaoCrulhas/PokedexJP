const express = require('express')
const router = express.Router()
const catchController = require('../controllers/userController')
const jwt = require('jsonwebtoken')

// Post User
// router.post('/' ,verifyJWT ,userController.createUser); with auth;
// router.post('/', userController.createUser);


module.exports = router
