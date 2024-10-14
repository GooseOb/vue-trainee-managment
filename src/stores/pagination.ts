import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePaginationStore = defineStore('pagination', () => {
  const page = ref(1)
  const setPage = (newPage: number) => {
    page.value = newPage
  }
  return { page, setPage }
})
