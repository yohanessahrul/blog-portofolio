<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <!-- <form> -->
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Email" v-model="email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
          </div>
          <button type="submit" class="btn btn-primary" @click="login">Submit</button>
        <!-- </form> -->
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios.post('http://localhost:3000/api/user/login', {
        email: this.email,
        password: this.password
      })
        .then((response) => {
          let data = response.data
          localStorage.setItem('token', data.token)
          this.$router.push('/admin')
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}

</script>

<style>
  * {
    text-align: left;
  }
</style>
