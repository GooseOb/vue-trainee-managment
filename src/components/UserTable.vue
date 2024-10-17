<script setup lang="ts">
import * as api from '@/api'
import type { User } from '@/types'
import EditIcon from '@/icons/EditIcon.vue'
import DeleteIcon from '@/icons/DeleteIcon.vue'

const { users } = defineProps<{ users: User[] }>()

const deleteUser = (id: number) => {
  api
    .deleteUser(id)
    .then(() => {
      alert('User deleted successfully')
    })
    .catch(alert)
}
</script>

<template>
  <div class="user-table">
    <table>
      <thead>
        <tr>
          <th class="avatar-column"></th>
          <th class="name-column">Full Name</th>
          <th class="action-column">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            <img :src="user.avatar" alt="Avatar" class="avatar" />
          </td>
          <td>{{ user.first_name }} {{ user.last_name }}</td>
          <td>
            <RouterLink v-bind:to="'edit/' + user.id" class="action-button">
              <EditIcon class="icon" />
            </RouterLink>
            <button @click="deleteUser(user.id)" class="action-button">
              <DeleteIcon />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.user-table {
  margin: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}
.avatar-column {
  width: 10%;
}

.name-column {
  width: 80%;
}

.actions-column {
  width: 10%;
}

th,
td {
  padding: 12px;
  text-align: left;
  border-top: 2px solid #f7f9f9;
  border-bottom: 2px solid #f7f9f9;
}

tbody tr:nth-child(odd) {
  background-color: #f7f9f9;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.action-button {
  background: none;
  color: black;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin-right: 8px;
}
.icon {
  width: 1rem;
  height: 1rem;
}
</style>
