<template>
  <div>
    <ul id="pokemons">
    <li v-for="pokemon in pokemons" :key="pokemon.url">
        {{ pokemon.name }} - <router-link :to="{ path: `/pokemon/${pokemon.name}`, params: {namePokemon: pokemon.name }  }">Info</router-link>
        <!-- to="{ path: '/singlePlace/ + detail.id', params: {placeName: detail.name } }" -->
    </li>
    </ul>
    <br>
    <b-pagination size="md" :total-rows="900" v-model="currentPage" :per-page="100">
    </b-pagination>
  </div>    
</template>

<script>
    import UsersService from "../UsersService";
    export default {
        data() {
            return {
                pokemons: '',
                currentPage: 1
            }
        },
        async created() {
            if (this.$store.getters.getPokemons.length === 0) {
                let res = await UsersService.getAllPokemons()
                this.pokemons =res.data.results
                this.$store.commit('POKEMONS', res.data.results)
            } else {
                this.pokemons = this.$store.getters.getPokemons
            }
        },
    }
</script>

<style scoped>

</style>