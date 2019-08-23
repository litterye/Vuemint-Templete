<template>
  <div class="footer">
    <ul>
      <router-link tag="li" to="/">首页</router-link>
      <router-link tag="li" to="/about">论坛</router-link>
      <router-link tag="li" to="/aa">动态</router-link>
      <router-link tag="li" to="/bb">我的</router-link>
    </ul>
  </div>
</template>

<style lang="less" scoped>
@import url('../assets/style/base');
.footer{
  height: .4rem;
  background: @mainColor;
  width: 100vw;
  ul{
    width: 100%;
    height: 100%;
    display: flex;
    li{
      flex: 1;
    }
  }
}
</style>

