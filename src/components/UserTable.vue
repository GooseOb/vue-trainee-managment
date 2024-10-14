<script setup lang="ts">
import * as api from '@/api'
import type { User } from '@/types'

const { users } = defineProps<{ users: User[] }>()

const deleteUser = (id: number) => {
  api.deleteUser(id).then(res => {
    alert(res.ok ? 'User deleted successfully' : 'Failed to delete user')
  })
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                  />
                  <path
                    d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                  />
                </g>
              </svg>
            </RouterLink>
            <button @click="deleteUser(user.id)" class="action-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
                />
              </svg>
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
