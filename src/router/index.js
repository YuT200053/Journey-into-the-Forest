import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    }
  ]
});

export default router;
