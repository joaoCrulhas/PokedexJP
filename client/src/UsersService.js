/* eslint-disable */ 
import axios from 'axios'

// const urlApi = `http://127.0.0.1:3000/api/v1/users`
// const urlApiAuth = `http://127.0.0.1:3000/api/v1/auth`
const urlPokeApi = `https://pokeapi.co/api/v2/`
const urlApi = `api/v1/users`
const urlApiAuth = `api/v1/auth`
// const urlPokeApi = `https://pokeapi.co/api/v2/`


class UserService {
    /**
     * Create a new user
     * @param {object} user
     * @returns {String}
     */
    static createUser(user){
        return axios.post(urlApi, {
            "email": user.email,
            "name": user.name,
            "favouritePokemon": user.favouritePokemon,
            "password": user.password,
            "birthDate": user.birthDate
          })
    }
    /**
     * Create a new token 
     * @param {object} user
     * @returns {String} 
     */
    static loginUserCreateToken(user) {
        return axios.post(`${urlApiAuth}/login`, {
            "email": user.email,
            "password": user.password
        })
    }
    /**
     * Return a user with email params
     * @param {String} userEmail
     * @param {String} tokenUser
     * @returns {object} 
     */
    static getUserInfo (userEmail, tokenUser) {
        const  config = {
            headers: {'x-access-token': tokenUser}
        }
        return axios.get(`${urlApi}/${userEmail}`, config)
                               .then(response => response)
                               .catch(error => error)
    }

    /**
     * Return a user with email params
     * @param {String} userEmail
     * @param {String} tokenUser
     * @returns {object} 
     */
    static async getAllPokemons() {
        return await axios.get(`${urlPokeApi}pokemon/`)
    }


    /**
     * Get info about pokemon
     * @param {String} pokemonName
     * @returns {object} 
     */
    static async getPokemonInfo(pokemonName) {
        return await axios.get(`${urlPokeApi}pokemon/${pokemonName}/`)
    }

    /**
     * Save a new pokemon 
     * @param {String} pokemonName
     * @returns {object} 
     */
    static  async catchPokemon(userID,pokemonName, tokenUser) {
        const  config = {
            headers: {'x-access-token': tokenUser}
        }
        console.log(` userID = ${userID}`)

        return await axios.post(`${urlApi}/catchpokemon`, {
            "id": userID,
            "pokemon": pokemonName
        }, config)
    }

    static async getMyPokemons(userID, tokenUser) {
        console.log(userID)
        const  config = {
            headers: {'x-access-token': tokenUser}
        }
        return axios.get(`${urlApi}/mypokemons/${userID}`, config)
                               .then(response => response)
                               .catch(error => error)
    }

    static checkEmailExist(email) {
        return axios.get(`${urlApi}/exist/${email}`)
                               .then(response => response)
                               .catch(error => error)
    }
    
}

export default UserService