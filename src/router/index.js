import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/Main.vue'
import Home from '@/Home.vue'
import Category from '@/Category.vue'
import Cart from '@/Cart.vue'
import Me from '@/Me.vue'
import Detail from '@/Detail.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/message/vue-package/',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {name: 'home', path: '', component: Home},
        {name: 'category', path: 'category', component: Category},
        {name: 'cart', path: 'cart', component: Cart},
        {name: 'me', path: 'me', component: Me}
      ]
    },
    { name: 'detail', path: '/detail/:id', component: Detail },
    { name: 'notfound', path: '*', component: NotFound }
  ]
})
