<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Beranda</router-link> |
      <router-link to="/article">Blog</router-link>
    </div>
    <!-- <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="index.html">Yosaru</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
            <ul class="navbar-nav m-auto">
                <li class="nav-item m-auto">
                    <a class="nav-link" href="index.html"><router-link to="/">Home</router-link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="category.html"><router-link to="/about">About</router-link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html"><router-link to="/article">Blog</router-link></a>
                </li>
            </ul>
            <ul class="navbar-nav login-button">
              <li class="nav-item">
                <a class="nav-link" href="contact.html"><router-link to="/login">Login</router-link></a>
              </li>
            </ul>
          </div>
        </div>
      </nav> -->
    
    <router-view/>
  </div>
</template>

<script>

 $(document).on('click.nav-item','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).removeClass('in').addClass('collapse');
    }
});
import Footer from '@/components/Footer.vue'

  export default {
    components: {
      
    }
  }

</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media (max-width: 576px) {
  .login-button {
    margin-left: -15px;
  }
}

</style>
