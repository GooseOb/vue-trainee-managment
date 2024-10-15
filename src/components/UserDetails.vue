<script setup lang="ts">
import type { UserData } from '@/types'
import UserInput from './UserInput.vue'
import { ref } from 'vue'
import PhotoIcon from '@/icons/PhotoIcon.vue'

const props = defineProps<{ form?: UserData }>()

const form = { ...props.form }

const emit = defineEmits(['submit'])
const avatar = ref(form.avatar)

const onAvatarChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      avatar.value = reader.result as string
    }
    reader.readAsDataURL(file)
  }
}

const submitForm = () => {
  form.avatar = avatar.value
  emit('submit', form)
}
</script>

<template>
  <form class="wrapper" @submit.prevent="submitForm">
    <div class="container data">
      <div class="inputs">
        <UserInput v-model="form.first_name" label="First Name" />
        <UserInput v-model="form.last_name" label="Last Name" />
      </div>
      <input type="submit" class="submit" value="Update details" />
    </div>
    <div class="container photo">
      <img
        class="image"
        v-bind:src="avatar || 'https://reqres.in/img/faces/1-image.jpg'"
      />
      <div class="change-photo-wrapper">
        <button class="change-photo">
          <PhotoIcon />
          <span>Change photo</span>
        </button>
        <input
          type="file"
          class="file-input"
          accept="image/*"
          @change="onAvatarChange"
        />
      </div>
    </div>
  </form>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  gap: 2rem;
}

.inputs {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 768px) {
  .inputs {
    flex-direction: column;
  }
}

.user-input {
  margin-right: 1rem;
}

.submit {
  background-color: #449671;
  color: white;
  width: fit-content;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-top: auto;
}

.data {
  flex: 2;
}

.photo {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.change-photo {
  display: flex;
  width: 100%;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #333;
  padding: 8px 16px;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 1rem;
}

.change-photo-wrapper {
  width: 100%;
  position: relative;
}

.image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 2rem;
}

.file-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
</style>
