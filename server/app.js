const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const databaseConnection = require('./database')
const users = require('./routes/users')
const catchrouter = require('./routes/catch')
const auth = require('./routes/auth')
const jwt = require('jsonwebtoken');

const expressValidator  = require('express-validator')

require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/v1/users', users)
app.use('/api/v1/auth', auth)
app.use('/api/v1/catch', catchrouter)

module.exports = app
