import { createRouter, createWebHistory } from 'vue-router'
import FrontlayoutsViewVue from '@/views/frontend/layouts/LayoutsView.vue'
import HomeView from '../views/HomeView.vue'
import ContactViewVue from '@/views/frontend/ContactView.vue'
import AboutViewVue from '@/views/frontend/AboutView.vue'

import BacklayoutsViewVue from '@/views/backend/layouts/LayoutsView.vue'
import DashboardView from '../views/DashboardView.vue'
import IndexViewVue from '@/views/backend/product/IndexView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FrontlayoutsViewVue,
      children: [
        {
          path: '', 
          component: HomeView,
        },
        {
          path: '/about',
          name: 'about',
          component: AboutViewVue,
        },
        {
          path: '/contact',
          name: 'contact',
          component: ContactViewVue,
        },
      ],
    },
    // This is Back end Part...
    
    {
      path: '/dashboard',
      name: 'dashboard',
      component: BacklayoutsViewVue,
      children: [
        {
          path: '/dashboard', 
          component: DashboardView,
        },
        {
          path: '/index',
          name: 'index',
          component: IndexViewVue,
        },
      ],
    },
  ],
})

export default router
