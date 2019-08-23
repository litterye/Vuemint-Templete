<template>
  <div class="home">
    <Header></Header>
    <div class="main">
      <ul>
        <li>11</li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import {koaget} from '../api/index'
export default {
  name: 'home',
  components: {
    Header,Footer
  },
  created(){
    this.koaget()
  },
  methods:{
    koaget(){
      koaget().then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/style/base');
@keyframes change{
	0%{transform:rotateX(0deg) rotateY(0deg) }
	25%{transform:rotateX(30deg) rotateY(90deg) }
	50%{transform:rotateX(0deg) rotateY(180deg) }
	75%{transform:rotateX(-30deg) rotateY(270deg)}
	100%{transform:rotateX(0deg) rotateY(360deg) }}
.home{
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .main{
    flex: 1;
    height: 100%;
    width: 100vw;
    overflow-y: auto;
    position: relative;
    
  }
}
</style>

