import { auth } from '@/config/firebase';
import { createRouter, createWebHistory } from 'vue-router';

const beforeAppEnter = (to, from, next) => {
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
        footer: true,
        header: {
          leading: {
            avt: true
          },
          title: 'Home',
          icon: 't2ico-notification',
          'icon-router': {
            name: 'Notification',
            params: {}
          }
        }
      },
      component: () => import('@/views/home.vue'),
      beforeEnter: beforeAppEnter
    },
    {
      path: '/budget',
      name: 'Budget',
      meta: {
        footer: true,
        header: {
          leading: false,
          title: 'My Budget',
          icon: 't2ico-document',
          'icon-router': {
            name: 'Document',
            params: {}
          }
        }
      },
      component: () => import('@/views/budget.vue'),
      beforeEnter: beforeAppEnter
    },
    {
      path: '/report',
      name: 'Report',
      meta: {
        footer: true,
        header: {
          leading: false,
          title: 'My Report',
          icon: 't2ico-filter',
          'icon-router': {
            name: 'Filter',
            params: {}
          }
        }
      },
      component: () => import('@/views/report.vue'),
      beforeEnter: beforeAppEnter
    },
    {
      path: '/profile',
      name: 'Profile',
      meta: {
        footer: true,
        header: {
          leading: false,
          title: 'My Profile',
          icon: 't2ico-setting',
          'icon-router': {
            name: 'Setting',
            params: {}
          }
        }
      },
      component: () => import('@/views/profile.vue'),
      beforeEnter: beforeAppEnter
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
    },
    {
      path: '/setting',
      name: 'Setting',
      component: () => import('@/views/setting.vue'),
      beforeEnter: beforeAppEnter
    },
    {
      path: '/filter',
      name: 'Filter',
      component: () => import('@/views/filter.vue'),
      beforeEnter: beforeAppEnter
    },
    {
      path: '/notification',
      name: 'Notification',
      component: () => import('@/views/notification.vue'),
      beforeEnter: beforeAppEnter
    },
    {
      path: '/document',
      name: 'Document',
      component: () => import('@/views/document.vue'),
      beforeEnter: beforeAppEnter
    },
    {
      path: '/new-transaction',
      name: 'NewTransaction',
      meta: {
        footer: false,
        header: {
          leading: {
            'go-back': true
          },
          title: 'Add Transaction',
          traning: {
            text: 'Add'
          }
        }
      },
      component: () => import('@/views/new-transaction.vue'),
      beforeEnter: beforeAppEnter
    },
    {
      path: '/select-category',
      name: 'SelectCategory',
      meta: {
        footer: false,
        header: {
          leading: {
            'go-back': true
          },
          title: 'Select a Category',
          traning: {
            text: 'cancel'
          }
        }
      },
      component: () => import('@/views/select-category.vue'),
      beforeEnter: beforeAppEnter
    }
  ]
});

export default router;
