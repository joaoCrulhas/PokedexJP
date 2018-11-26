import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Signout from '@/components/Signout'
import Prof from '@/components/Prof'
import Pokemons from '@/components/Pokemons'
import CatchPokemons from '@/components/CatchPokemons'
import PokemonInfo from '@/components/PokemonInfo'
import MyPokemons from '@/components/MyPokemons'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signout',
      name: 'Signout',
      component: Signout
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Prof
    },
    {
      path: '/pokemons',
      name: 'Pokemons',
      component: Pokemons      
    },
    {
      path: '/catch',
      name: 'CatchPokemons',
      component: CatchPokemons
    },
    {
      path: '/pokemon/:namePokemon',
      name: 'PokemonInfo',
      component: PokemonInfo
    },
    {
      path: '/mypokemons',
      name: 'MyPokemons',
      component: MyPokemons
    }
    // MyPokemons
  ]
})
// https://stackoverflow.com/questions/49714606/avoid-that-when-refreshing-the-page-the-global-status-is-lost-with-vuex-and-vue