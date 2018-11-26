<template>
    <div>
        <p>Meus pokemons: </p>
        <ul id="example-1">
            <li v-for="mypokemon in myPokemons" :key="mypokemon._id">
                Name: {{ mypokemon.pokemonName }} - Catched:  {{ mypokemon.created }}

            </li>
        </ul>
    </div>
</template>

<script>
    import UserService from '../UsersService'
    export default {
        data() {
            return {
                myPokemons: []
            }
        },
        async created() {
            // if(this.$store.getters.getMyPokemons.length === 0) { 
            //     let myPokemonsAPI = await UserService.getMyPokemons(this.$store.state.user._id, this.$store.state.token)
            //     myPokemonsAPI = myPokemonsAPI.data
            //     this.myPokemons = myPokemonsAPI
            //     this.$store.commit('MYPOKEMONS', this.myPokemons)
            // } else {
            //     // console.log(this.$store.getters.getMyPokemons)
            //     this.myPokemons = this.$store.getters.getMyPokemons
            // }
                let myPokemonsAPI = await UserService.getMyPokemons(this.$store.state.user._id, this.$store.state.token)
                myPokemonsAPI = myPokemonsAPI.data
                this.myPokemons = myPokemonsAPI
                this.$store.commit('MYPOKEMONS', this.myPokemons)
        },
    }
</script>

<style scoped>

</style>