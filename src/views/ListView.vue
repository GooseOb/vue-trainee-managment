<script setup lang="ts">
import Search from '../components/SearchInput.vue'
import AddUserBtn from '../components/AddUserBtn.vue'
import UserTable from '../components/UserTable.vue'
import Pagination from '../components/PaginationComponent.vue'
import { onMounted, reactive, ref, computed } from 'vue'
import type { UserListResponse } from '../types'
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
  value: {} as UserListResponse,
})

const searchQuery = ref('')

const filteredData = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  return data.value.data.filter(({ first_name, last_name }) =>
    (first_name + ' ' + last_name).toLowerCase().includes(query),
  )
})
</script>

<template>
  <h1 class="title">User list</h1>
  <div class="container">
    <div class="header">
      <Search v-model="searchQuery" />
      <AddUserBtn />
    </div>
    <UserTable
      v-if="data.isLoaded"
      :users="filteredData"
      :currentPage="currentPage"
    />
    <div v-else>Loading...</div>
  </div>
  <Pagination
    class="list-pagination"
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
  flex-wrap: wrap;
  gap: 5px;
}
@media screen and (max-width: 768px) {
  .list-pagination {
    justify-content: center;
  }
}
@media screen and (max-width: 430px) {
  .header {
    justify-content: center;
  }
  .container {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
