<script setup>
import { useUserStore } from '@/store'
const userStore = useUserStore()
console.log(userStore.uesrInfo)
</script>

<template>
  <el-menu :router="true" default-active="/index/echart">
    <el-menu-item
      v-for="(item, i) in userStore.menulist"
      :key="i"
      :index="item.uri"
    >
      <span>{{ item.name }}</span>
    </el-menu-item>
    <!-- <el-sub-menu index="/index/echart">
      <template #title>
        <span>Echart</span>
      </template>
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item one</el-menu-item>
    </el-sub-menu> -->
  </el-menu>
</template>

<style scoped lang="scss"></style>
