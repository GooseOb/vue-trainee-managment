<script setup lang="ts">
import Search from '../components/Search.vue'
import AddUserBtn from '../components/AddUserBtn.vue'
import UserTable from '../components/UserTable.vue'
import Layout from '../components/Layout.vue'
import Pagination from '../components/Pagination.vue'
import { onMounted, onUpdated, reactive, ref } from 'vue'

type User = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}
type Res = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: User[]
}

const currentPage = ref(1)

onMounted(() => {
  fetch('https://reqres.in/api/users')
    .then<Res>(res => res.json())
    .then(res => {
      data.isLoaded = true
      data.value = res
    })
})
const onCurrentPageChange = (page: number) => {
  currentPage.value = page
  fetch('https://reqres.in/api/users?page=' + currentPage.value)
    .then<Res>(res => res.json())
    .then(res => {
      data.value = res
    })
}

const data = reactive({
  isLoaded: false,
  value: {} as Res,
})
</script>

<template>
  <Layout>
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
  </Layout>
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
