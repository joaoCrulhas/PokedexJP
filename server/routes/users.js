const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator/check')

const verifyJWT = ((req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, process.env.JWTSECRET, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    // if it's ok, save id in req to use in the future
    req.userId = decoded.id;
    next();
  });
})

// Post User
// router.post('/' ,verifyJWT ,userController.createUser); with auth;
router.post('/', userController.createUser);
// Get user info
router.get('/:email', verifyJWT, userController.getUserInfo);

router.get('/mypokemons/:iduser', verifyJWT, userController.getMyPokemons);

router.post('/catchpokemon', verifyJWT, userController.catchPokemon);

module.exports = router
