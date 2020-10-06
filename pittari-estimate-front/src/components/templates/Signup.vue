<template>
  <div class="signup">
    <h2>Sign up</h2>
    <input type="name" placeholder="Name" v-model="name">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signUp">Register</button>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import axios from '@/plugins/axios'

export default {
  name: 'Signup',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      user: null,
    }
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert("Create account!")
          let newUser = {
            name: this.name,
            uid: user.user.uid,
            email: this.email
          }
          axios.post('/users', newUser)
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>
