<template>
  <div class="list">
    <div class="jumbotron">
      <h1>Blog</h1>
    </div>
    <div class="container">
      <!-- <h1>Recent Post</h1> -->
      <div class="container">
        <ul>
          <li v-for="article in articles" v-bind:key="article._id">
            <div class="row">
              <div class="col-md-3 col-sm-12 image">
                <router-link :to="{ name: 'detailarticle', params: { id: article._id }}">
                  <img class="gmbr" :src="article.url" v-on:click="detailArticle(article._id)">
                  <!-- <img v-else v-bind:src="article.url" v-on:click="detailArticle(article._id)"> -->
                </router-link>
              </div>
              <div class="col-md-9 col-sm-12 artikel">
                <h2>
                  <router-link :to="{ name: 'detailarticle', params: { id: article._id }}">{{ article.title }}</router-link>
                </h2>
                <p class="li-date"><i class="fas fa-calendar-alt"></i>{{ toIsoStringDate(article.createdAt) }}  <i class="fas fa-user"></i> admin  <i class="fas fa-eye"></i>{{ randomView() }}</p>
                <p class="li-desc">{{ limitParagraf(article.description) }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ListArticle',
  props: {
    msg: String
  },
  data() {
    return {
      articles: []
    }
  },
  beforeCreate() {
    axios.get('http://35.187.241.27/api/article/list')
    .then(response => {
      // console.log(response.data.data)
      let data = response.data.data
      data.forEach(article => {
        this.articles.push(article)
      });
    })
    .catch(err => {
      console.log(err)
    })
  },
  methods: {
    detailArticle: function(id) {
      console.log(id)
      location.reload('https://youtube.com')
    },
    limitParagraf: function(value) {
      return value.substring(0, 300) + '...'
    },
    toIsoStringDate(date) {
      let dateString = date.toString()
      let datearr = ''
      for(let i=0; i<dateString.length; i++){
        if(i < 10){
          datearr += dateString[i]
        }
      }
      let newDate = datearr.split('-').reverse()
      let bulan;
      switch (newDate[1]) {
        case '01':bulan='Januari'; break;
        case '02':bulan='Februari'; break;
        case '03':bulan='Maret'; break;
        case '04':bulan='April'; break;
        case '05':bulan='Mei'; break;
        case '06':bulan='Juni'; break;
        case '07':bulan='Juli'; break;
        case '08':bulan='Agustus'; break;
        case '09':bulan='September'; break;
        case '10':bulan='Oktober'; break;
        case '11':bulan='November'; break;
        case '12':bulan='Desember'; break;
      }
      return `${newDate[0]} ${bulan} ${newDate[2]}`
    },
    randomView() {
      return Math.floor(Math.random()*1500)
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  .container {
    width: 100%;
    /* background: red; */
  }

  ul {
    margin: 0;
    padding: 0;
  }
  li {
    margin-bottom: 15px;
    list-style: none;
  }
  .artikel {
    width: 100%;
    /* background: green; */
  }

  .artikel > h2, .artikel > p {
    text-align: left;
    padding: 5px 10px 20px 10px;
  }

  .artikel > h2 > a {
    color: #069666 !important;
  }

  .artikel > h2 > a:hover {
    color: #026d49 !important;
  }

  .li-date {
    font-size: 13px;
    margin-top: -25px;
    color: #7a7a7a;
  }

  .li-desc {
    margin-top: -25px;
  }

  .fa-calendar-alt {
    margin-top: 4px;
    font-size: 12px;
    margin-right: 8px;
    color: #7a7a7a;
  }
  .fa-user {
    font-size: 12px;
    margin-right: 3px;
    color: #7a7a7a;
    margin-left: 15px;
  }

  .fa-eye {
    font-size: 12px;
    margin-right: 5px;
    color: #7a7a7a;
    margin-left: 15px;
  }

  .image {
    width: 100%;
    max-height: 200px;
    /* background: blue; */
    overflow: hidden;
    padding: 0;
  }

  .image > img, .gmbr {
    display: table;
    width: 100% !important;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: rgb(255, 255, 255) !important;
  }

  @media (max-width: 576px) {

    .artikel {
      border-bottom: thin solid #d1d1d1;
    }
    .artikel > h2 {
      font-size: 20px;
      line-height: 1.2em;
      text-align: left;
      padding: 0px;
      margin-top: 10px;
      margin-bottom: 8px;
      margin-left: -13px;
    }

    .fa-calendar-alt, .fa-user, .fa-eye, .li-date {
      font-size: 11px;
    }

    

    .li-desc {
      /* margin-top: -25px; */
      display: none;
      visibility: collapse;
      margin-bottom: -150px;
    }

    .li-date {
      padding: 0px;
      margin-left: -20px;
      font-size: 13px;
      margin-top: -10px;
      padding-left: 0px;
      color: #7a7a7a;
    }
  }
</style>
