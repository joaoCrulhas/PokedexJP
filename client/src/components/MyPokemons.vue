<template>
    <div>
        <p>Meus pokemons: </p>
        <ul id="example-1">
            <li v-for="mypokemon in myPokemons" :key="mypokemon._id">
                <img :src="urlPokemon"/>
                Name: {{ mypokemon.pokemonName }} - Catched:  {{ mypokemon.created }}
            </li>
        </ul>
    </div>
</template>

<script>
    import UserService from '../UsersService'
    import Pokemon from 'pokemon-images';

    export default {
        data() {
            return {
                urlPokemon: [],
                myPokemons: []
            }
        },
        async created() {
                if (!this.$store.state.login) {
                    this.$router.push('Login') 
                } else {
                    // const imgPokemon = Pokemon.getSprite(this.$route.params.namePokemon)
                    let myPokemonsAPI = await UserService.getMyPokemons(this.$store.state.user._id, this.$store.state.token)
                    myPokemonsAPI = myPokemonsAPI.data
                    this.myPokemons = myPokemonsAPI
                    this.$store.commit('MYPOKEMONS', this.myPokemons)
                }
        },
    }
</script>

<style scoped>

</style>