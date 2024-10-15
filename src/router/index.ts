import { createRouter, createWebHistory } from 'vue-router'
import ListView from '@/views/ListView.vue'
import AddView from '@/views/AddView.vue'
import EditView from '@/views/EditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/list',
      name: 'User list',
      component: ListView,
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
      props: true,
    },
  ],
})

export default router
