<script setup lang="ts">
import SearchIcon from '@/icons/SearchIcon.vue'

const searchQuery = defineModel()
</script>

<template>
  <div class="search-container">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search for users..."
      class="search-input"
    />
    <button class="icon-button">
      <SearchIcon />
    </button>
  </div>
</template>

<style scoped>
.search-container {
  background-color: #f7f9f9;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.search-input {
  background-color: #f7f9f9;
  font-size: 1rem;
  padding: 8px;
  border: none;
  flex-grow: 1;
}

.icon-button {
  background-color: #f7f9f9;
  color: #333;
  font-size: 1.5rem;
  padding: 8px 12px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
