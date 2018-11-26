/* eslint-disable */ 
import axios from 'axios'

// const urlApi = `http://127.0.0.1:3000/api/v1/users`
// const urlApiAuth = `http://127.0.0.1:3000/api/v1/auth`
const urlPokeApi = `https://pokeapi.co/api/v2/`
const urlApi = `api/v1/users`
const urlApiAuth = `api/v1/auth`
// const urlPokeApi = `https://pokeapi.co/api/v2/`


class UserService {
    // 
    // Create user 
    static createUser(user){
        return axios.post(urlApi, {
            "email": user.email,
            "name": user.name,
            "favouritePokemon": user.favouritePokemon,
            "password": user.password,
            "birthDate": user.birthDate
          })
    }
    static loginUserCreateToken(user) {
        return axios.post(`${urlApiAuth}/login`, {
            "email": user.email,
            "password": user.password
        })
    }
    static getUserInfo (userEmail, tokenUser) {
        const  config = {
            headers: {'x-access-token': tokenUser}
        }
        return axios.get(`${urlApi}/joao.crulhas@gmail.com`, config)
                               .then(response => response)
                               .catch(error => error)
    }
    static async getAllPokemons() {
        return await axios.get(`${urlPokeApi}pokemon/`)
    }

    static async getPokemonInfo(pokemonName) {
        return await axios.get(`${urlPokeApi}pokemon/${pokemonName}/`)
    }

    static  async catchPokemon(userID,pokemonName, tokenUser) {
        const  config = {
            headers: {'x-access-token': tokenUser}
        }

        return await axios.post(`${urlApi}/catchpokemon`, {
            "id": userID,
            "pokemon": pokemonName
        }, config)
    }

    static async getMyPokemons(userID, tokenUser) {
        const  config = {
            headers: {'x-access-token': tokenUser}
        }
        return axios.get(`${urlApi}/mypokemons/${userID}`, config)
                               .then(response => response)
                               .catch(error => error)
    }
    
}

export default UserService