<script setup lang="ts">
import { onMounted } from 'vue'
import UserDetails from '../components/UserDetails.vue'
import type { User } from '../types'
import { reactive } from 'vue'
import { getUser, updateUser } from '@/api'

const { id } = defineProps<{ id: number }>()

const onSubmit = (data: User) => {
  updateUser(id, data).then(res => {
    alert(res.ok ? 'User updated successfully' : 'Failed to update user')
  })
}

onMounted(() => {
  getUser(id)
    .then(res => {
      data.value = res.data
      data.isLoaded = true
    })
    .catch(alert)
})
const data = reactive({
  isLoaded: false,
  value: {} as User,
})
</script>

<template>
  <h1 class="title">Edit user</h1>
  <UserDetails v-if="data.isLoaded" @submit="onSubmit" :form="data.value" />
  <div class="container" v-else>Loading...</div>
</template>
