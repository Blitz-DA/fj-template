<script setup>
const userStore = useUserStore()
const active = ref('/admin/index')

const route = useRoute()
onMounted(() => {
  active.value = route.fullPath
})
</script>

<template>
  <el-menu :router="true" :default-active="active">
    <template v-for="(item, i) in userStore.menulist" :key="i">
      <el-menu-item v-if="!item.children" :index="item.uri">
        <span>{{ item.name }}</span>
      </el-menu-item>
      <el-sub-menu v-else :index="item.uri">
        <template #title>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item
          v-for="(item2, i2) in item.children"
          :key="i2"
          :index="item2.uri"
        >
          <span>{{ item2.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<style scoped lang="scss"></style>
