import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Form from '@/components/Form.vue'
import Cart from '@/components/Cart.vue'
import Category from '@/components/Category.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Main
    },
    {
      path: '/category/:category',
      name: 'Category',
      component: Category,
      props:true
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    
    
  ]
})
