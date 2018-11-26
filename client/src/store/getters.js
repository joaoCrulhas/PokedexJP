/* eslint-disable */

export default {
    getPokemons: state => {
        return state.pokemons
    },
    getRandomPokemon: state => {
        if (state.pokemons.length > 0) { 
            let random = Math.floor(Math.random() * 949) + 1 
            console.log(random)
            return state.pokemons[random].name
        }
    },
    getMyPokemons: state => {
            return state.myPokemons
    }
}