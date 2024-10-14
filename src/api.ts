import type { ListUsersResponse, UserData } from './types'

const BASE = 'https://reqres.in/api/'
const USERS = BASE + 'users/'

export const getUsers = () =>
  fetch(USERS).then<ListUsersResponse>(res => res.json())

export const getUsersByPage = (page: number) =>
  fetch(USERS + '?page=' + page).then<ListUsersResponse>(res => res.json())

export const addUser = (user: UserData) =>
  fetch(USERS, {
    method: 'POST',
    body: JSON.stringify(user),
  }).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error('Failed to add user')
    }
  })
export const getUser = (id: number) =>
  fetch(USERS + id).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error('Failed to load user')
    }
  })

export const updateUser = (id: number, user: UserData) =>
  fetch(USERS + id, {
    method: 'PUT',
    body: JSON.stringify(user),
  })

export const deleteUser = (id: number) =>
  fetch(USERS + id, { method: 'DELETE' })
