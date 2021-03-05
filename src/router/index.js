import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Music from '../views/Music.vue'
import Video from '../views/Video.vue'
import Writing from '../views/Writing.vue'
import Photograph from '../views/Photograph.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/writing',
    name: 'Writing',
    component: Writing
  },
  {
    path: '/photograph',
    name: 'Photograph',
    component: Photograph
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
