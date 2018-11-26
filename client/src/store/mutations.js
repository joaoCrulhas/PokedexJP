/* eslint-disable */

export default {
    'LOGIN_USER' (state, payload) {
        state.user = payload
    },
    'DEFINE_TOKEN' (state, payload) {
        state.login = true
        state.token = payload
    },
    'LOGOUT' (state) {
        state.login = false
        state.token = ''
        state.user.email = ''
        state.user.favouritePokemon = ''
        state.user.name = ''
        state.user.password = ''
        state.user.birthDate = ''
    },
    'POKEMONS' (state, payload) {
        state.pokemons = payload
    },
    'MYPOKEMONS' (state, payload) {
        state.myPokemons = payload
    },
    'CATCHNEWPOKEMON' (state, payload) {
        
    }
}