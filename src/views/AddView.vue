<script setup lang="ts">
import router from '@/router'
import UserDetails from '../components/UserDetails.vue'
import type { UserData } from '../types'
import { ref } from 'vue'
import { addUser } from '@/api'

const formData = ref<UserData>({
  first_name: '',
  last_name: '',
  avatar: '',
})

const onSubmit = () => {
  addUser(formData.value)
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
