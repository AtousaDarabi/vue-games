import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import TicTacToe from '../views/TicTacToe.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/tic-tac-toe', component: TicTacToe },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
