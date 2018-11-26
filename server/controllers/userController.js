const userModel = require('../models/user')
const catchModel = require('../models/Catch')
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

exports.getUserInfo = ( async (req, res, next) => {
    const email = req.params.email;
    let user = await userModel.find({ email }, (error, doc) => {
        doc
    })
    res.status(200).json(user[0])
})

exports.catchPokemon = (req, res, next) => {
    const catchrow = new catchModel({
        idUser: req.body.id,
        pokemonName: req.body.pokemon
    })

    catchrow.save((err) => {
        if (err) return handleError(err);
        res.status(201).json({Msg: 'Saved !'})
    });
}

exports.getMyPokemons = async (req, res, next) => {
    const idUser = req.params.iduser;
    let myPokemons = await catchModel.find({ idUser } ,(error, doc) => {
        doc
    }).select('created pokemonName idUser')
    res.status(200).json(myPokemons)
}
