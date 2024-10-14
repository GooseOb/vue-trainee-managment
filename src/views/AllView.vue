<script setup lang="ts">
import Search from '../components/SearchInput.vue'
import AddUserBtn from '../components/AddUserBtn.vue'
import UserTable from '../components/UserTable.vue'
import Pagination from '../components/PaginationComponent.vue'
import { onMounted, reactive, ref } from 'vue'
import type { ListUsersResponse } from '../types'
import { getUsers, getUsersByPage } from '@/api'

const currentPage = ref(1)

onMounted(() => {
  getUsers().then(res => {
    data.isLoaded = true
    data.value = res
  })
})
const onCurrentPageChange = (page: number) => {
  currentPage.value = page
  getUsersByPage(page).then(res => {
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
