<template>
    <div>
        <h3> {{ this.$route.params.namePokemon }} </h3>
        <div class="loading" v-if="loading">
            Loading Pokemon info...
        </div>
        <div v-else>
            <h4>Abilities</h4>
            <ul>
            <li v-for="info in pokemonInfo" v-bind:key="info">
                {{ info }}
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import UserService from '../UsersService'

    export default {
        data() {
            return {
                loading: false,
                post: null,
                error: null,
                pokemonInfo: []
            }
        },
        created() {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            async fetchData() {
                this.loading = true
                let pokemonInfoAPI = await UserService.getPokemonInfo(this.$route.params.namePokemon)
                pokemonInfoAPI = pokemonInfoAPI.data.abilities
                pokemonInfoAPI.forEach(element => {
                    this.pokemonInfo.push(element.ability.name)
                });
                this.loading = false
                
            }


        },

    }
</script>

<style scoped>

</style>