import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Collection from '../views/Collection'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/collection',
    name: 'collection',
    component: Collection
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
