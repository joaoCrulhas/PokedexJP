<template>
    <div> 
      <p> Hi, I'm Joao and this is a task that a made to practice my js skills.
In this project I use the stack (Nodejs, MongoDB, VueJS and JWT). 
<br>

With Nodejs I created a REST API, with some endpoints and use Vuejs to consume this API.
To auth the users I use JWT. <br>
In this project, first, you need to sign up with some simple pieces of information about you, after this, It's possible you have a fun time with PokedexJP.
There are three menu options "Pokemons" in this options all pokemon is showed for you and you can access some info about pokemon clicking in "Info".
The menus "MyPokemons" and "Catch Pokemons" you need to auth.
<br>
  <a href="https://joaocrulhas.github.io " target="_blank"> More info about me </a>
</p>

    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
