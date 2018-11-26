<template>
    <div>
        <h3> {{ this.$route.params.namePokemon }} </h3>
        <div class="loading" v-if="loading">
            Loading Pokemon info...
        </div>
        <div v-else>
            <img :src="urlImage"/>
            <h4>Abilities</h4>
            <ul>
                <li v-for="info in pokemonInfo" v-bind:key="info">{{ info }}</li>
            </ul>
            <br>
            <p>weight: {{ this.pokemonMoreInfo.weight }} hectograms</p>
            <p>height: {{ this.pokemonMoreInfo.height }} decimetres</p>
            <h4> Moves </h4>
            <ul>
                <li v-for="info in this.pokemonMoreInfo.moves" v-bind:key="info">{{ info.move.name }}</li>
            </ul> 
        </div>
    </div>
</template>

<script>
    import UserService from '../UsersService'
    import Pokemon from 'pokemon-images';

    export default {
        data() {
            return {
                loading: false,
                post: null,
                error: null,
                pokemonInfo: [], //abilities
                pokemonMoreInfo: {},
                urlImage:''
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
                const imgPokemon = Pokemon.getSprite(this.$route.params.namePokemon)
                this.urlImage = imgPokemon
                this.loading = true
                let pokemonInfoAPI = await UserService.getPokemonInfo(this.$route.params.namePokemon)
                this.pokemonMoreInfo = pokemonInfoAPI.data
                console.log(this.pokemonMoreInfo)
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