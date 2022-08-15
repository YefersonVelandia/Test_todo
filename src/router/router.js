import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard'

const routes = [
  { 
    path: '/',
    name: 'login',
    component: () => import('../components/LoginForm') 
  },
  { 
    path: '/dashboard',
    name: 'dashboard',
    beforeEnter: [isAuthenticatedGuard],
    component: () => import('../layout/Main') 
  },
  { 
    path: '/Users/:id/todos',
    beforeEnter: [isAuthenticatedGuard],
    props: true,
    component: () => import('../components/Todo') 
  },
  { 
    path: '/:pathMatch(.*)*',
    component: () => import('../pages/NoPageFound') 
  },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router