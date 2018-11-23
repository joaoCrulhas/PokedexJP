let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    email: String,
    name: String,
    birthDate: Date, 
    favouritePokemon: String, 
    password: String
  })

  module.exports = mongoose.model('User', userSchema)
