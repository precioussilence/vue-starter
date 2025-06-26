import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../components/home/HomePage.vue'),
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('../components/system/UserPage.vue'),
        },
        {
          path: 'role',
          name: 'role',
          component: () => import('../components/system/RolePage.vue'),
        },
        {
          path: 'menu',
          name: 'menu',
          component: () => import('../components/system/MenuPage.vue'),
        },
      ],
    },
  ],
})

export default router
