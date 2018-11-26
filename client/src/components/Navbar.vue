<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand :to="{ name: 'HelloWorld' }">PokedexJP</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
            <b-nav-item :to="{ name: 'Pokemons' }">Pokemons</b-nav-item>
            <b-nav-item :to="{ name: 'CatchPokemons' }">Catch Pokemons</b-nav-item>
            <b-nav-item :to="{ name: 'MyPokemons' }">MyPokemons</b-nav-item>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right v-if="userLogged">
                <!-- Using button-content slot -->
                <template slot="button-content">
                <em> {{ userName }} </em>
                </template>
                <b-dropdown-item href="#"><router-link :to="{ name: 'Profile' }">Profile</router-link></b-dropdown-item>
                <b-dropdown-item @click="logout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right v-else>
                <!-- Using button-content slot -->
                <template slot="button-content">
                <em> Login </em>
                </template>
                <b-dropdown-item href="#"><router-link :to="{ name: 'Login' }">Login</router-link></b-dropdown-item>
                <b-dropdown-item href="#"><router-link :to="{ name: 'Signup' }">Signup</router-link></b-dropdown-item>
            </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
        </b-navbar>
        
    </div>
</template>

<script>
    import UserService from '../UsersService'
    export default {
        name:'Navbar',
        computed: {
            userLogged() {
                return this.$store.state.login
            },
            userName() {
                return this.$store.state.user.name
            }
        },
        methods: {
            logout() {
                this.$store.commit('LOGOUT')
            }
        },
    }
</script>

<style scoped>

</style>