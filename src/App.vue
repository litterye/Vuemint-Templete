<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  created(){
    this.$store.commit('exsample',1)
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  font-size: .13rem;
}
</style>
