<script setup lang="ts">
const { pages, currentPage } = defineProps<{
  pages: number
  currentPage: number
}>()

const emit = defineEmits(['update:currentPage'])

const goToPage = (page: number) => {
  emit('update:currentPage', page)
}

const prevPage = () => {
  if (currentPage > 1) {
    emit('update:currentPage', currentPage - 1)
  }
}

const nextPage = () => {
  if (currentPage < pages) {
    emit('update:currentPage', currentPage + 1)
  }
}
</script>

<template>
  <div class="pagination-container">
    <div class="pagination">
      <button
        class="first pagination-button"
        @click="prevPage"
        :disabled="currentPage === 1"
      >
        «
      </button>

      <button
        v-for="page in pages"
        :key="page"
        class="pagination-button"
        :class="{ active: page === currentPage }"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>

      <button
        class="last pagination-button"
        @click="nextPage"
        :disabled="currentPage === pages"
      >
        »
      </button>
    </div>
  </div>
</template>

<style scoped>
.pagination-container {
  display: flex;
}

.pagination {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  border-radius: 8px;
}

.first {
  border-radius: 4px 0 0 4px;
}
.last {
  border-radius: 0 4px 4px 0;
}

.pagination-button {
  color: #449671;
  background-color: white;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ddd;
}

.pagination-button:disabled {
  color: black;
  cursor: not-allowed;
}

.pagination-button.active {
  background-color: #449671;
  color: white;
}
</style>
