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
      path: '/',
      name: 'Home',
      meta: {
        header: {
          title: 'Home',
          icon: 't2ico-notification'
        }
      },
      component: () => import('@/views/home.vue')
    },
    {
      path: '/budget',
      name: 'Budget',
      meta: {
        header: {
          title: 'My Budget',
          icon: 't2ico-document'
        }
      },
      component: () => import('@/views/budget.vue')
    },
    {
      path: '/report',
      name: 'Report',
      meta: {
        header: {
          title: 'My Report',
          icon: 't2ico-filter'
        }
      },
      component: () => import('@/views/report.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      meta: {
        header: {
          title: 'My Profile',
          icon: 't2ico-setting'
        }
      },
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
      component: () => import('@/views/logout.vue')
    }
  ]
});

export default router;
