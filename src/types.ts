export type UserData = {
  first_name: string
  last_name: string
  avatar: string
}
export type User = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}
export type UserResponse = {
  data: User
}
export type UserListResponse = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: User[]
}
