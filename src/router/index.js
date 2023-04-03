import { auth } from '@/config/firebase';
import { createRouter, createWebHistory } from 'vue-router';

const beforeProfileEnter = (to, from, next) => {
  const user = auth.currentUser;
  if (!user) next({ name: 'Login', params: {} });
  else next();
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/views/profile.vue'),
      beforeEnter: beforeProfileEnter
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        layout: 'auth'
      },
      component: () => import('@/views/login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      meta: {
        layout: 'auth'
      },
      component: () => import('@/views/register.vue')
    },
    {
      path: '/logout',
      name: 'Logout',
      meta: {
        layout: 'auth'
      },
      component: () => import('@/views/logout.vue')
    }
  ]
});

export default router;
