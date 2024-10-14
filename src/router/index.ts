import { createRouter, createWebHistory } from 'vue-router'
import AllView from '@/views/AllView.vue'
import AddView from '@/views/AddView.vue'
import EditView from '@/views/EditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/all',
      name: 'User list',
      component: AllView,
    },
    {
      path: '/add',
      name: 'Add user',
      component: AddView,
    },
    {
      path: '/edit/:id',
      name: 'Edit user',
      component: EditView,
      props: true
    },
  ],
})

export default router
