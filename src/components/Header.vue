<template>
  <div class="header">
    <svg
      t="1563686182045"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1203"
      width="20"
      height="20"
      @click="back"
    >
      <path
        d="M671.968176 911.99957c-12.287381 0-24.576482-4.67206-33.951566-14.047144L286.048434 545.984249c-18.751888-18.719204-18.751888-49.12028 0-67.872168L638.016611 126.111222c18.751888-18.751888 49.12028-18.751888 67.872168 0 18.751888 18.719204 18.751888 49.12028 0 67.872168l-318.016611 318.047574L705.888778 830.047574c18.751888 18.751888 18.751888 49.12028 0 67.872168C696.544658 907.32751 684.255557 911.99957 671.968176 911.99957z"
        p-id="1204"
        fill="#ffffff"
      />
    </svg>
    header
    <!-- <button @click="show">anniu</button> -->
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
// import {mapState} from 'vuex'
// import
export default {
  data() {
    return {};
  },
  computed: {
    // ...mapState({
    //   exsample: state => state.exsample
    // })
  },
  created(){

  },
  methods: {
    show() {
      MessageBox("提示", "操作成功");
    },
    back(){
      this.$router.go(-1)
    }
  },
  mounted() {
    console.log(this.$store.state);
  }
};
</script>

<style lang="less" scoped>
@import url("../assets/style/base.less");
.header {
  height: 0.4rem;
  background: @mainColor;
  width: 100vw;
  text-align: center;
  font-size: 0.18rem;
  font-weight: 900;
  color: #fff;
  font-family: "微软雅黑";
  line-height: 0.4rem;
  position: relative;
  svg{
    position: absolute;
    left:.05rem;
    top:.1rem;
  }
}
</style>

