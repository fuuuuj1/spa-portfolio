import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import about from '@/components/about.vue'
import WorkHistory from '@/components/WorkHistory.vue'
import WorkHistory2 from '@/components/WorkHistory2.vue'
import MyBelief from '@/components/MyBelief.vue'
import WorksOne from '@/components/WorksOne.vue'
import WorksTwo from '@/components/WorksTwo.vue'
import WorksThree from '@/components/WorksThree.vue'
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
    path: '/about/history',
    name: 'WorkHistory',
    component: WorkHistory
  },
  {
    path: '/about/history2',
    name: 'WorkHistory',
    component: WorkHistory2
  },
  {
    path: '/about/belief',
    name: 'MyBelief',
    component: MyBelief
  },
  {
    path: '/works',
    name: 'WorksOne',
    component: WorksOne
  },
  {
    path: '/works/2',
    name: 'WorksTwo',
    component: WorksTwo
  },
  {
    path: '/works/3',
    name: 'WorksThree',
    component: WorksThree
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
