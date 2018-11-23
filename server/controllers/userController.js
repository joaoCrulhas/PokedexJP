const userModel = require('../models/user')
const { check, validationResult } = require('express-validator/check');
const ValidationContract = require('../validators/validator')

exports.createUser = ((req, res, next) => {
    let contract = new ValidationContract()
    
    contract.isEmail(req.body.email, 'Email is incorrect!')
    contract.hasMinLen(req.body.name, 5, 'Name is necessary more than 5 letters')
    contract.isRequired(req.body.birthDate, 'Birthdate is required')
    contract.isRequired(req.body.favouritePokemon, 'favouritePokemon is required')
    contract.hasMinLen(req.body.password, 6 ,'Min 6 letters for the password')


    if(!contract.isValid()) {
        res.status(400).json({Errors: contract.errors()})
        
        return
    }


    
    const newUser = new userModel(req.body)
    newUser.save((err) => {
        if (err) return handleError(err);
        res.status(201).json({Msg: 'User created!'})
    });
})
