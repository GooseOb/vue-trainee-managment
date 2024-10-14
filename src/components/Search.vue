<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')

const performSearch = () => {
  console.log('Search query:', searchQuery.value)
}
</script>

<template>
  <div class="search-container">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search for users..."
      class="search-input"
    />
    <button class="icon-button" @click="performSearch">
      <i
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
          /></svg
      ></i>
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
  margin: 10px 0;
  flex-grow: 1;
}

.icon-button {
  padding: 8px 12px;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-button {
  background-color: #f7f9f9;
  color: #333;
  font-size: 1.5rem;
}
</style>
