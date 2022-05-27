import axios from 'axios'
import type { RouteRecordNormalized } from 'vue-router'
export interface UserState {
  name?: string
  avatar?: string
  job?: string
  organization?: string
  location?: string
  email?: string
  introduction?: string
  personalWebsite?: string
  jobName?: string
  organizationName?: string
  locationName?: string
  phone?: string
  registrationDate?: string
  accountId?: string
  certification?: number
  role: RoleType
}

export interface LoginData {
  username: string
  password: string
}

export interface LoginRes {
  code: number
  data: object
  token: string
}
export function login(data: LoginData) {
  return axios.post<LoginRes>('/login', data)
}

export function logout() {
  return axios.post<LoginRes>('/api/user/logout')
}

export function getUserInfo() {
  return axios.post<UserState>('/api/user/info')
}

export function getMenuList() {
  return axios.get<[]>('/permissions')
}
