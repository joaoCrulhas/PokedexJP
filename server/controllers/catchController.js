// const userModel = require('../models/user')
let mongoose = require('mongoose')
let validator = require('validator')

exports.createUser = ((req, res, next) => {
    // const newAp = new ApartmentModel(req.body)
    const newUser = new userModel(req.body)
    newUser.save((err) => {
        if (err) return handleError(err);
        res.status(201).json({Msg: 'User created!'})
    });
})
