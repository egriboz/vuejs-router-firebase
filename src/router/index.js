import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import About from '@/components/About'
import Contact from '@/components/Contact'
// import DetailPage from '@/components/DetailPage'
import details from '@/components/details'
import Persons from '@/components/Persons'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/persons/:index',
      name: 'persons',
      component: details
    },
    {
      path: '/persons/',
      name: 'persons',
      component: Persons
    }
  ],
  mode: 'history'
})
