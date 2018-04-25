import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Article from './views/Article.vue'
import DetailArticle from './views/DetailArticle.vue'
import Login from './views/Login.vue'
import ArticleAdmin from './views/admin/ArticleAdmin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/detailarticle/:id',
      name: 'detailarticle',
      component: DetailArticle,
      props: true
    },
    {
      path: '/admin/article',
      name: 'articleadmin',
      component: ArticleAdmin
    }
  ]
})
