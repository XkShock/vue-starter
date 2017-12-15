<template>
  <div class="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" src="./styles/app.scss"></style>

<style scoped>
.app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
