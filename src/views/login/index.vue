<script setup>
import LoginForm from './form.vue'
</script>

<template>
  <div class="containerbox flex-center-col">
    <div class="login-title text-36px">HZFJ-TECH</div>
    <login-form />
  </div>
</template>

<style scoped lang="scss">
.containerbox {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.login-title {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
