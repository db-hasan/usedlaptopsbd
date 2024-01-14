import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import FrontlayoutsViewVue from '@/views/frontend/layouts/LayoutsView.vue'
import HomeView from '../views/HomeView.vue'
import productViewVue from '@/views/frontend/pages/ProductView.vue'

import BacklayoutsViewVue from '@/views/backend/layouts/LayoutsView.vue'
import DashboardView from '../views/DashboardView.vue'
import IndexViewVue from '@/views/backend/product/IndexView.vue'
import CreateViewVue from '@/views/backend/product/CreateView.vue'
import EditViewVue from '@/views/backend/product/EditView.vue'
import ShowViewVue from '@/views/backend/product/ShowView.vue'

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
          path: '/product/:id/view',
          name: 'productView',
          component: productViewVue,
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
        {
          path: '/create',
          name: 'create',
          component: CreateViewVue,
        },
        {
          path: '/product/:id/edit',
          name: 'productEdit',
          component: EditViewVue,
        },
        {
          path: '/product/:id/show',
          name: 'productShow',
          component: ShowViewVue,
        },
      ],
    },
    {
      path: '/pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
})

export default router
