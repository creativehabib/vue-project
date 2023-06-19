import { createRouter, createWebHistory } from 'vue-router'
import { UserStore } from '@/stores/UserStore'
import Authenticated from '../components/layouts/Authenticated.vue'
import Guest from '../components/layouts/Guest.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Guest,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path : '/login',
          name : 'Login',
          component : () => import('../views/auth/Login.vue'),
          meta:{
              requiresAuth:false
          }
        },
        {
            path : '/register',
            name : 'Register',
            component : () => import('../views/auth/Register.vue'),
            meta:{
                requiresAuth:false
            }
        },
      ]
    },
    {
      path: '/dashboard',
      component: Authenticated,
      children: [
        {
          path : '/dashboard',
          name : 'Dashboard',
          component : () => import('../views/auth/Dashboard.vue'),
          meta:{
              requiresAuth:true
          }
      },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    }
    
  
  ]
});

router.beforeEach((to,from) =>{

  const store = UserStore()

  if(to.meta.requiresAuth && store.token == 0){
      return { name : 'Login'}
  }
  if(to.meta.requiresAuth == false && store.token != 0){
      return { name : 'Dashboard'}
  }
})

export default router
