const userModel = require('../models/user')
const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')

// Login and create a new jwt
exports.login = ( async (req, res, next) => {
    let user = await userModel.find({ email: req.body.email })
    if (user.length === 0) res.status(404).json({Error: 'User not found!'})
    if (user[0].password === req.body.password) {
        const id = user[0]._id;
        const token = jwt.sign( { id }, process.env.JWTSECRET, {
            expiresIn: 300000
        })
        res.status(200).send({ auth: true, token });
    }
})

// Logout and destroy the token
exports.logout = ((req, res, next) => {
    res.status(200).send({ auth: false, token: null });
})
