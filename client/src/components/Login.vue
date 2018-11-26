<template>
  <div>
    <b-form @submit="onSubmit">
      
      <b-form-group id="email"
                    label="Email address:"
                    label-for="email">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="password"
                    label="Password:"
                    label-for="password">
        <b-form-input id="password"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Enter your password">
        </b-form-input>
      </b-form-group>
      
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>
/* eslint-disable */
import UserService from '../UsersService'
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
      }
    }
  },
  // testasasdsadsadsadad
  methods: {
    async onSubmit (evt) {
      console.log('to aqui')
        let retornoAuth = await UserService.loginUserCreateToken(this.form)
        if (retornoAuth.status === 200) {
          let userInfo = await UserService.getUserInfo(this.form.email, retornoAuth.data.token)
          this.$store.commit('DEFINE_TOKEN', retornoAuth.data.token)
          this.$store.commit('LOGIN_USER', userInfo.data)
          this.$router.push('Profile') 
        }
    }
  }
}

</script>

<style scoped>

</style>