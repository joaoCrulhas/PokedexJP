let mongoose = require('mongoose')

let catchSchema = new mongoose.Schema({
    idUser: String,
    pokemonName: String,
    created: { type: Date, default: Date.now },
  })

  module.exports = mongoose.model('Catch', catchSchema)
