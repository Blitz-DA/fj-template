import { defineStore } from 'pinia'
import router from '@/router'
import {
  login as userLogin,
  logout as userLogout,
  getMenuList
} from '@/api/common/user'
import type { UserState, LoginData } from './types'
// import { removeRouteListener } from '@/utils/route-listener'

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    uesrInfo: {},
    menulist: []
  }),

  getters: {
    token: (state) => state.uesrInfo?.token
  },

  actions: {
    async login(loginForm: LoginData) {
      try {
        const { data } = await userLogin(loginForm)
        this.uesrInfo = data
        this.getmenuList()
        router.push('/admin')
      } catch (err) {
        sessionStorage.clear()
        throw err
      }
    },
    async getmenuList() {
      const { data } = await getMenuList()
      this.menulist = data
    },
    async logout() {
      await userLogout()

      this.resetInfo()
      sessionStorage.clear()
    },
    // switchRoles() {},
    // setInfo(partial: Partial<UserState>) {
    //   this.$patch(partial)
    // },
    resetInfo() {
      this.$reset()
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: sessionStorage
      }
    ]
  }
})

export default useUserStore
