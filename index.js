import { createRouter, createWebHashHistory } from 'vue-router'
import NameEntryPage from '../views/NameEntryPage.vue'
import MenuPage from '../views/MenuPage.vue'
import VegPage from '../views/VegPage.vue'
import NonVegPage from '../views/NonVegPage.vue'
import FoodItemsPage from '../views/FoodItemsPage.vue'
import CheckoutPage from '../views/CheckoutPage.vue'
import OrderSuccessPage from '../views/OrderSuccessPage.vue'
import { user } from '../store.js'

const routes = [
  { path: '/', component: NameEntryPage },
  { path: '/menu', component: MenuPage },
  { path: '/veg', component: VegPage },
  { path: '/nonveg', component: NonVegPage },
  { path: '/nonveg/:category', component: FoodItemsPage },
  { path: '/veg/:category', component: FoodItemsPage },
  { path: '/checkout', component: CheckoutPage },
  { path: '/success', component: OrderSuccessPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const protectedPaths = ['/menu', '/veg', '/nonveg', '/checkout', '/success']
  const requiresUser = protectedPaths.some(path => to.path === path || to.path.startsWith(path + '/'))

  if (requiresUser && !user.name) {
    return next('/')
  }

  next()
})

export default router
