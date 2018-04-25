<template>
  <div class="detail">
    <div class="image-big">
      <img :src="url">
    </div>
    <h2>{{ title }}</h2>
    <div>
    <p class="paragraf">{{ rapihinParagraf(desc) }}</p>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'DetailArticle',
  data() {
    return {
      title: '',
      desc: '', 
      url: ''
    }
  },
  props: [ 'id' ],
  created() {
    axios.get('http://localhost:3000/api/article/detailarticle/' + this.id)
    .then(response => {
      console.log(response.data.data)
      this.title = response.data.data.title
      this.desc = response.data.data.description
      this.url = response.data.data.url 
    })
    .catch(err => {
      console.log(err)
    })
  },
  methods: {
    rapihinParagraf (value) {
      return value.split('\n\n').join(`\n`)
      // return value
    } 
  }
}
</script>

<style>
.image-big {
  width: 100%;
  height: 300px;
  background: green;
  overflow: hidden;
}
.image-big > img {
  width: 100%;
  margin-top: -200px;
  overflow: hidden;
}
.detail {
  margin: 0 auto;
}
.paragraf {
  /* width: 70%; */

  padding: 100px;
  word-wrap: break-word !important;
  line-height: 25px;
  text-align: left;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif !important;
  /* margin: 0 auto; */
}

@media (max-width: 576px) {
  
  .image-big {
    width: 100%;
    height: 170px;
    background: green;
    overflow: hidden;
  }
  .image-big > img {
    width: 100%;
    margin-top: 0px;
    overflow: hidden;
  }
  h2 {
    font-size: 28px;
    text-align: left;
    font-weight: bold;
    padding: 20px;
  }
  
  .paragraf {
    /* width: 70%; */
    margin-top: -25px;
    padding: 20px;
    word-wrap: break-word !important;
    line-height: 25px;
    text-align: left;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif !important;
    /* margin: 0 auto; */
  }
}
</style>
