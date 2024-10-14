<script setup lang="ts">
import { defineProps } from 'vue'

const model = defineModel()

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="user-input">
    <label class="label" v-bind:for="props.label">{{ props.label }}</label>
    <input class="input" type="text" v-bind:id="props.label" v-model="model" />
  </div>
</template>
<style scoped>
.user-input {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
}

.input {
  font-size: 1rem;
  padding: 8px;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #e2e8f0;
}
.label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
</style>
