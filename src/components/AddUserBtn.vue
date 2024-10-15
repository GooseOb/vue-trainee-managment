<script setup lang="ts">
import AddIcon from '@/icons/AddIcon.vue'
</script>

<template>
  <RouterLink to="/add" class="btn">
    <AddIcon class="icon" />
    <span>Add User</span>
  </RouterLink>
</template>

<style scoped>
.btn {
  background-color: #449671;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 36px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
}
.icon {
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 8px;
}
</style>
