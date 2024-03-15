import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  scrollBehavior() {
    return {
      top: 0
    };
  },
  routes: [
    {
      path: '/',
      component: () => import('../views/user/UserPage.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/user/UserHome.vue')
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('../views/user/UserProducts.vue')
        },
        {
          path: 'products/:id',
          component: () => import('../views/user/UserProduct.vue')
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('../views/user/UserCart.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../views/dashboard/AdminLogin.vue')
    },
    {
      path: '/admin',
      component: () => import('../views/dashboard/AdminDashboard.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/dashboard/AdminProducts.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/dashboard/AdminOrders.vue')
        }
      ]
    }
  ]
});

export default router;
