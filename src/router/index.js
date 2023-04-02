import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'Register',
      meta: {
        layout: 'auth'
      },
      component: () => import('@/views/register.vue')
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        layout: 'auth'
      },
      component: () => import('@/views/login.vue')
    }
  ]
});

export default router;
