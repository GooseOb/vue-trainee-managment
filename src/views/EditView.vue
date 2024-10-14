<script setup lang="ts">
import { onMounted } from 'vue'
import UserDetails from '../components/UserDetails.vue'
import type { User } from '../types'
import { defineProps, reactive } from 'vue'

const { id } = defineProps({
  id: {
    type: Number,
    required: true,
  },
})

const url = 'https://reqres.in/api/users/' + id

const onSubmit = () => {
  fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data.value),
  }).then(res => {
    alert(res.ok ? 'User updated successfully' : 'Failed to update user')
  })
}

onMounted(() => {
  fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Failed to load user')
      }
    })
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
