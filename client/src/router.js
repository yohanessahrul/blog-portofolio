import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Article from './views/Article.vue'
import DetailArticle from './views/DetailArticle.vue'
import Login from './views/Login.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'article',
      component: Article
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
      path: '/detailarticle/:id',
      name: 'detailarticle',
      component: DetailArticle,
      props: true
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})
