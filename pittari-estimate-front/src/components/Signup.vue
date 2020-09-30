<template>
  <div class="signup">
    <h2>Sign up</h2>
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signUp">Register</button>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  name: 'Signup',
  data() {
    return {
      email: '',
      password: '',
      user: null,
    }
  },
  methods: {
    signUp: function() {
      firebase.auth().createUser(this.email, this.password)
        .then(user => {
          alert("Create account!")
          let newUser = {
            uid: user.user.uid,
            email: this.email
          }
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>
