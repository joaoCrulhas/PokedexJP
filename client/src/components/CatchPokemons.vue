<template>
    <div>
        <p> Para capturar o seu pokemon insira um número de 0 a 9 no input em questão, caso seja o mesmo número do sorteado, você irá capturá-lo </p> 
        <hr>
        <div v-show="flagAlert">
            <b-alert show>You catched a new pokemon :D </b-alert>
        </div>

        <p>Restam {{  4 - attempts }} tentativas </p>
        <p> Pokemon sort: {{ pokemon.name }}</p>
        <input v-model="number" placeholder="Catch yout pokemon">
        <div class="row">
            <b-button v-on:click="catchit"> Catch!</b-button>
        </div>
    </div>
</template>

<script>
    import UsersService from '../UsersService'
    export default {
        data() {
            return {
                flagAlert:false,
                attempts: 1,
                number: '',
                pokemon: {
                    name: 'teste'
                }
            }
        },
        async created() {
            if (this.$store.getters.getPokemons.length === 0) {
                let res = await UsersService.getAllPokemons()
                this.$store.commit('POKEMONS', res.data.results)
                this.pokemon.name = this.$store.getters.getRandomPokemon
            } else {
                this.pokemon.name = this.$store.getters.getRandomPokemon
            }
        },
        methods: {
            async catchit() {
                this.flagAlert = false;
                let numberSorted = Math.floor(Math.random() * 9) + 1 
                if (numberSorted == this.number && this.attempts < 4) {
                    await UsersService.catchPokemon(this.$store.state.user._id, this.pokemon.name, this.$store.state.token)
                    this.attempts = 1
                    this.flagAlert = true;
                    let randomPokemon = this.$store.state.pokemons[Math.floor(Math.random() * 949) + 1 ] 
                    this.pokemon.name = randomPokemon.name

                } else {
                    this.attempts ++
                }
                if (this.attempts >= 4) {
                    this.attempts = 1
                    let randomPokemon = this.$store.state.pokemons[Math.floor(Math.random() * 949) + 1 ] 
                    this.pokemon.name = randomPokemon.name
                }
            }
        },
    }
</script>

<style scoped>

</style>