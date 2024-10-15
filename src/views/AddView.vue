<script setup lang="ts">
import router from '@/router'
import UserDetails from '../components/UserDetails.vue'
import type { UserData } from '../types'
import { addUser } from '@/api'

const onSubmit = (data: UserData) => {
  addUser(data)
    .then(res => {
      alert('User added successfully, redirecting to the edit page...')
      router.push('/edit/' + res.id)
    })
    .catch(alert)
}
</script>

<template>
  <h2 class="title">Add user</h2>
  <UserDetails @submit="onSubmit" />
</template>
