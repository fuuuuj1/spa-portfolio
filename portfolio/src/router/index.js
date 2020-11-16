import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import about from '@/components/about.vue'
import works from '@/components/works.vue'
import skill from '@/components/skill.vue'
import contact from '@/components/contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/how',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/works',
    name: 'works',
    component: works
  },
  {
    path: '/skill',
    name: 'skill',
    component: skill
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
