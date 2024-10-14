<template>
  <RouterLink to="/add" class="btn">
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
    </svg>
    <span>Add User</span>
  </RouterLink>
</template>

<style scoped>
.btn {
  background-color: #449671;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 64px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
}
.icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 8px;
}
</style>
