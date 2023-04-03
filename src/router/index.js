import { auth } from '@/config/firebase';
import { createRouter, createWebHistory } from 'vue-router';

import NewTransactionMoreDetails from '@/views/new-transaction-more-details.vue';

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
        footer: true,
        header: {
          leading: true,
          title: 'Home',
          icon: 't2ico-notification',
          'icon-router': {
            name: 'Notification',
            params: {}
          }
        }
      },
      component: () => import('@/views/home.vue')
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
      component: () => import('@/views/budget.vue')
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
      component: () => import('@/views/report.vue')
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
    },
    {
      path: '/setting',
      name: 'Setting',
      component: () => import('@/views/setting.vue')
    },
    {
      path: '/filter',
      name: 'Filter',
      component: () => import('@/views/filter.vue')
    },
    {
      path: '/notification',
      name: 'Notification',
      component: () => import('@/views/notification.vue')
    },
    {
      path: '/document',
      name: 'Document',
      component: () => import('@/views/document.vue')
    },
    {
      path: '/new-transaction',
      name: 'NewTransaction',
      meta: {
        footer: false,
        header: {
          leading: false,
          title: 'Add Transaction',
          traning: {
            text: 'Add'
          }
        }
      },
      component: () => import('@/views/new-transaction.vue'),
      children: [
        {
          path: 'more-details',
          name: 'NewTransactionMoreDetails',
          // component: {
          //   // 'more-details': () => import('@/views/new-transaction-more-details.vue')
          //   'more-details': NewTransactionMoreDetails
          // }
          component: () => import('@/views/new-transaction-more-details.vue')
        }
      ]
    },
    {
      path: '/select-category',
      name: 'SelectCategory',
      meta: {
        footer: false,
        header: {
          leading: false,
          title: 'Select a Category',
          traning: {
            text: 'cancel'
          }
        }
      },
      component: () => import('@/views/select-category.vue')
    }
  ]
});

export default router;
