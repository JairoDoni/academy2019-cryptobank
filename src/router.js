import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Login from './views/Login.vue'
import CreateAccount from './views/CreateAccount.vue'
import MainPage from './views/MainPage.vue'
import NewDeposit from './views/NewDeposit.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: '/login'
    },
    {
      path: '/',
      name: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/createaccount',
      name: 'createaccount',
      component: CreateAccount
    },
    {
      path: '/mainpage',
      name: 'mainpage',
      component: MainPage
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: NewDeposit
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else next()
})

export default router
