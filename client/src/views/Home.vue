<template>
  <div class="home">
    <br><br><br>
    <img src="../assets/logo.png">
    <HelloWorld msg="Powered by Vue.js"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
