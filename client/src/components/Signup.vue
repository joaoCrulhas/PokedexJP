<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-alert :show="showAlertError" variant="danger">This e-mail already exist!</b-alert>

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

      <b-form-group id="name"
                    label="Your Name:"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>

      <b-form-group id="birthDate"
                    label="Birth Date:"
                    label-for="birthDate">
        <b-form-input id="birthDate"
                      type="date"
                      v-model="form.birthDate"
                      required
                      placeholder="Enter your favourite pokemon">
        </b-form-input>
      </b-form-group>

      <b-form-group id="favouritePokemon"
                    label="Favourite Pokemon:"
                    label-for="favouritePokemon">
        <b-form-input id="favouritePokemon"
                      type="text"
                      v-model="form.favouritePokemon"
                      required
                      placeholder="Enter your favourite pokemon">
        </b-form-input>
      </b-form-group>
      <b-form-group id="password"
                    label="Password:"
                    label-for="password">
        <b-form-input id="password"
                      type="password"
                      v-model="form.password"
                      required
                      :state="validatePassword"
                      placeholder="Enter your password"
                      aria-describedby="inputLiveHelp inputLiveFeedback">
        </b-form-input>
        <b-form-invalid-feedback id="inputLiveFeedback">Enter at least 6 letters</b-form-invalid-feedback>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
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
        name: '',
        favouritePokemon: '',
        birthDate: '',
      },
      show: true,
      showAlertError:false
    }
  },
  methods: {
    async onSubmit (evt) {
      let checkEmailExist = await UserService.checkEmailExist(this.form.email)
      if (typeof checkEmailExist.data.email !== 'undefined') {
        this.showAlertError = true
        return;
      }
      let retornoPost = await UserService.createUser(this.form)
      if (retornoPost.status === 201) {
        this.$store.commit('LOGIN_USER', this.form) // Atualiza a informação do meu usuário  na minha store
        let retornoAuth = await UserService.loginUserCreateToken(this.form)
        this.$store.commit('DEFINE_TOKEN' , retornoAuth.data.token)
        this.$router.push('Profile') 
      }
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.favouritePokemon = '';
      this.form.birthDate = '';
      this.form.password = '';
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  },
  computed: {
    validatePassword() {
       return this.form.password.length > 5 ? true : false
    }
  },
}
</script>

<style scoped>

</style>