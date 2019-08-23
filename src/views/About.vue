<template>
  <div class="about">
    <div class="top">
      <img src="../assets/img/1.gif" alt="">
      
    </div>
    <div class="mid">
      <div class="box">
        <mt-tab-container v-model="active" :swipeable="true">
          <mt-tab-container-item :id="index+1" v-for="(item,index) in list" :key="index">
            
            {{item.msg}}
          </mt-tab-container-item>

        </mt-tab-container>
        <div class="btn">
          <button @click="next(1)">上一页</button>
          <button @click="next(2)">下一页</button>
        </div>
      </div>
    </div>
    <div class="bot">
      <svg t="1565621687375" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1564" width="48" height="48"><path d="M625.5 513V216.1c0-13.5 2.5-28.9-12.9-35.9-14.2-6.4-26.3 1.5-37.7 9.5C434.5 288 294 386.1 153.8 484.7c-32.2 22.7-31.7 33.7 0.9 56.6C292.9 638.2 431.2 735 569.5 831.8c4.2 2.9 8.4 5.9 12.8 8.4 27 14.7 43 5.7 43.1-25.1 0.4-75.9 0.1-151.8 0.1-227.8V513zM727.9 512.8c0 92.1-0.1 184.1 0 276.2 0 37.7 19.1 60.8 50.1 61.4 32 0.7 52.2-23 52.2-61.8 0.1-184.1 0.1-368.2 0-552.3 0-37.5-19.3-60.9-50.1-61.5-31.8-0.6-52.2 23.3-52.2 61.9-0.1 92 0 184 0 276.1z" p-id="1565"></path></svg>
      <audio src="./song/By2、汪苏泷+-+有点甜(2).mp3" controls>
          浏览器不支持，请下载最新的chrome浏览器
      </audio>
      <svg t="1565621725806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2014" width="48" height="48"><path d="M402.9 513V216.1c0-13.5-2.5-28.9 12.9-35.9 14.2-6.4 26.3 1.5 37.7 9.5 140.5 98.3 281 196.4 421.2 295 32.2 22.7 31.7 33.7-0.9 56.6C735.6 638.2 597.3 734.9 459 831.7c-4.2 2.9-8.4 5.9-12.8 8.4-27 14.7-43 5.7-43.1-25.1-0.4-75.9-0.1-151.8-0.1-227.8-0.1-24.8-0.1-49.5-0.1-74.2zM300.5 512.8c0 92.1 0.1 184.1 0 276.2 0 37.7-19.1 60.8-50.1 61.4-32 0.7-52.2-23-52.2-61.8-0.1-184.1-0.1-368.2 0-552.3 0-37.5 19.3-60.9 50.1-61.5 31.8-0.6 52.2 23.3 52.2 61.9v276.1z" p-id="2015"></path></svg>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active: 1,
      list:[
        {
          msg:'爱你哟1'
        },
        {
          msg:'爱你哟2'
        },
        {
          msg:'爱你哟3'
        },
        {
          msg:'爱你哟4'
        },
        {
          msg:'爱你哟5'
        }
      ],
      songList:[
        './song/漂洋过海来看你-王丽坤+朱亚文.mp3',
        './song/By2、汪苏泷+-+有点甜(2).mp3',
        './song/花粥-纸短情长.mp3'
      ]
    }
  },
  methods:{
    next(type){
      if(type===1){
        this.active --
      }else if(type===2){
        this.active ++
      }
      // this.active=JSON.stringify(this.active)
    }
  }
}
</script>

<style lang="less" scoped>
.about{
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  // background: #efefef;
  .top{
    width: 100vw;
    height: 1.5rem;
    img{
      width: 100%
    }
  }
  .mid{
    flex: 1;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .box{
      width: 95%;
      height: 95%;
      background: #fff;
      border-radius: .1rem;
      box-shadow:  2px 2px 8px #ccc;
      display: flex;
      flex-direction: column;
      .mint-tab-container{
        flex: 1;
        width: 100%;
      }
      .btn{
        width: 100%;
        height: .5rem;
        display: flex;
        justify-content: center;
        button{
          width: 1rem;
          height: .4rem;
          border-radius: 6px;
          border:0;
          background: #f44336;
          opacity: .9;
          color:#fff;
          font-size: .15rem;
          margin-right: .2rem;
          outline: none;
        }
      }
    }
  }
  .bot{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // height: .5rem;
    padding: 5px 0;
    svg{
      width: .2rem;
      height: .2rem;
    }
    audio{
      margin:0 .1rem;
      outline: none;
    }
  }
}

</style>


