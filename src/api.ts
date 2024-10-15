import type { UserListResponse, UserData, UserResponse, User } from './types'

const BASE = 'https://reqres.in/api/'
const USERS = 'users/'

const req = <TResponse = ''>(
  url: string,
  action: string,
  options?: RequestInit,
) =>
  fetch(BASE + url, options).then<TResponse>(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error(`Failed to ${action}`)
    }
  })

export const getUsers = () => req<UserListResponse>(USERS, 'load users')

export const getUsersByPage = (page: number) =>
  req<UserListResponse>(USERS + '?page=' + page, 'load users')

export const addUser = (user: UserData) =>
  req<User>(USERS, 'add user', {
    method: 'POST',
    body: JSON.stringify(user),
  })

export const getUser = (id: number) =>
  req<UserResponse>(USERS + id, 'load user')

export const updateUser = (id: number, user: UserData) =>
  req<User>(USERS + id, 'update user', {
    method: 'PUT',
    body: JSON.stringify(user),
  })

export const deleteUser = (id: number) =>
  req(USERS + id, 'delete user', {
    method: 'DELETE',
  })
