<script setup lang="ts">
import Search from '../components/Search.vue'
import AddUserBtn from '../components/AddUserBtn.vue'
import UserTable from '../components/UserTable.vue'
import Pagination from '../components/Pagination.vue'
import { onMounted, reactive, ref } from 'vue'
import type { ListUsersResponse } from '../types'

const currentPage = ref(1)

onMounted(() => {
  fetch('https://reqres.in/api/users')
    .then<ListUsersResponse>(res => res.json())
    .then(res => {
      data.isLoaded = true
      data.value = res
    })
})
const onCurrentPageChange = (page: number) => {
  currentPage.value = page
  fetch('https://reqres.in/api/users?page=' + currentPage.value)
    .then<ListUsersResponse>(res => res.json())
    .then(res => {
      data.value = res
    })
}

const data = reactive({
  isLoaded: false,
  value: {} as ListUsersResponse,
})
</script>

<template>
  <h1 class="title">User list</h1>
  <div class="container">
    <div class="header">
      <Search />
      <AddUserBtn />
    </div>
    <UserTable
      v-if="data.isLoaded"
      :users="data.value.data"
      :currentPage="currentPage"
    />
    <div v-else>Loading...</div>
  </div>
  <Pagination
    v-if="data.isLoaded"
    :pages="data.value.total_pages"
    :currentPage="currentPage"
    @update:currentPage="onCurrentPageChange"
  />
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  height: 42px;
}
</style>
