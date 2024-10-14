<script setup lang="ts">
import UserInput from './UserInput.vue'
import { ref } from 'vue'

const props = defineProps({
  form: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['submit'])
const avatar = ref(props.form.avatar)

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
  props.form.avatar = avatar.value
  emit('submit')
}
</script>

<template>
  <form class="wrapper" @submit.prevent="submitForm">
    <div class="container data">
      <div class="inputs">
        <UserInput v-model="props.form.first_name" label="First Name" />
        <UserInput v-model="props.form.last_name" label="Last Name" />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m14.12 4l1.83 2H20v12H4V6h4.05l1.83-2zM15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5"
            />
          </svg>
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
  justify-content: space-between;
  gap: 2rem;
}

.inputs {
  display: flex;
  flex-direction: row;
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
