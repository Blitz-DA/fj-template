<script setup>
import { useUserStore } from '@/store'
const userStore = useUserStore()
const form = reactive({
  username: '',
  password: ''
})
</script>

<template>
  <el-form
    class="px-40px py-40px bg-#fff w-400px rounded shadow-xl"
    label-position="right"
    :model="form"
  >
    <el-form-item label="账号">
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-button @click="userStore.login(form)" type="primary" style="width: 100%"
      >登入</el-button
    >
  </el-form>
</template>

<style scoped lang="scss"></style>
