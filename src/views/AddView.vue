<script setup lang="ts">
import router from '@/router'
import UserDetails from '../components/UserDetails.vue'
import type { UserData } from '../types'
import { ref } from 'vue'

const formData = ref<UserData>({
  first_name: '',
  last_name: '',
  avatar: '',
})

const onSubmit = () => {
  fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(formData.value),
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Failed to add user')
      }
    })
    .catch(alert)
    .then(res => {
      router.push('/edit/' + res.id)
    })
}
</script>

<template>
  <h2 class="title">Add user</h2>
  <UserDetails @submit="onSubmit" :form="formData" />
</template>
