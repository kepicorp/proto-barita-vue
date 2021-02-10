import Vue from 'vue'
import VueRouter from 'vue-router'
import Bonds from '../views/bonds.vue'
import Dashboard from '../views/dashboard.vue'
import Equity from '../views/equity.vue'
import FX from '../views/equity.vue'
import Cash from '../views/cash.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/bonds',
    name: 'Bonds',
    component: Bonds
  },
  {
    path: '/cash',
    name: 'Cash',
    component: Cash
  },
  {
    path: '/fx',
    name: 'FX',
    component: FX
  },
  {
    path: '/equity',
    name: 'Equity',
    component: Equity
  },
  {
    path: '/dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
