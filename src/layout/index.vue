<script setup>
import LayoutNav from './nav.vue'
const title = import.meta.env.VITE_APP_TITLE
</script>

<template>
  <div class="contain">
    <header>
      <img src="@/assets/imgs/logo.png" alt="" />
      {{ title }}
    </header>
    <layout-nav class="nav" />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
.contain {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: 'header header' 'nav main';
  header {
    grid-area: header;
    background-color: #fff;
    line-height: 60px;
    padding-left: 40px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 1px solid #e7e7e8;
    display: flex;
    align-items: center;
    color: #191919;
    img {
      margin-right: 8px;
    }
  }
  .nav {
    grid-area: nav;
    border-right: 1px solid #e7e7e8;
  }
  main {
    grid-area: main;
    overflow: auto;
    background-color: #f5f5f5;
    padding: 10px;
  }
}
</style>
