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
      const { data } = await getMenuList({
        role: this.uesrInfo?.role || ''
      })
      this.$patch((state) => {
        state.menulist = useTreeList(data)
      })
    },
    async logout() {
      await userLogout()

      this.resetInfo()
      sessionStorage.clear()
    },
    resetInfo() {
      this.$reset()
    }
    // switchRoles() {},
    // setInfo(partial: Partial<UserState>) {
    //   this.$patch(partial)
    // },
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
