export type RoleType = '' | '*' | 'admin' | 'user'
export type UserInfo = {
  name?: string
  token?: string
  role?: string
}
export type menuItem = {
  id?: number
  parentId?: number
  name?: string
  uri?: string
  type?: string
}
export interface UserState {
  uesrInfo?: UserInfo
  menulist?: menuItem[]
}
export type LoginData = {
  username: string
  password: string
}
