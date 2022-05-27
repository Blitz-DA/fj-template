export type RoleType = '' | '*' | 'admin' | 'user'
export type UserInfo = {
  name?: string
  token?: string
}
export interface UserState {
  uesrInfo?: UserInfo
  menulist?: []
}
export type LoginData = {
  username: string
  password: string
}
