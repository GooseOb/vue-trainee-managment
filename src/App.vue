<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 300px;
}

@media (max-width: 768px) {
  .main {
    padding: 32px 0;
  }
}
</style>
