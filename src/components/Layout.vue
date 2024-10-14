<script setup></script>

<template>
  <h1 class="title">{{ $route.name }}</h1>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.title {
  font-weight: normal;
  font-size: 3rem;
  margin-bottom: 32px;
  margin-left: 8px;
}

.container {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 32px 16px;
}
</style>
