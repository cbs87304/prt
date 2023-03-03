import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {path: '/',
  component: () => import('../views/FrontLayout.vue'),
  children: [
  {
    path: '',
    name: 'Home',
    component: () => import('../views/front/HomeView.vue')
  },
  {
    path: 'about',
    name: 'About',
    component: () => import('../views/front/AboutView.vue')
  },
  {
    path: 'products',
    name: 'About',
    component: () => import('../views/front/ProductsView.vue')
  },
  {
    path: 'product/:id',
    name: 'About',
    component: () => import('../views/front/ProducView.vue')
  },
  {
    path: 'cart',
    name: 'About',
    component: () => import('../views/front/CartView.vue')
  }
]
}]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
