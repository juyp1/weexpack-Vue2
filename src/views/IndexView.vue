<template>
  <div class="container">
    <div class="top-c">
      <div class="top-c-r">
        <text class="app-title">平乡县产权交易平台</text>
        <image class="img-search" src="http://www.b2cf.cn/images/youpin3.jpg"></image>
        <slider-block></slider-block>
      </div>
    </div>
    <!-- <div class="content-c"></div> -->
    <app-nav></app-nav>
  </div>
</template>

<style scoped>
  .top-c{
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1000;
    height: 562.5px;
  }

  .top-c-r{
    position: relative;
    width: 750;
    height: 562.5px;
  }

  .app-title{
    position: fixed;
    top: 64.58px;
    left: 27.77px;
    z-index: 100;
    font-size: 31.94px;
    color: #ffffff;
    width: 375px;
    height: 69.44px;
    text-align: center;
    line-height: 69.44px;
    background-color: #3061d8;
    border-radius: 69.44px;
    z-index: 20;
  }

  .img-search{
    top: 64.58px;
    right: 27.77px;
    position: fixed;
    z-index: 100;
    width: 46.52px;
    height: 46.52px;
    z-index: 20;
  }

  .container{
    background-color: #f2f3f8;
  }

  .content-c{
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background-image: url('/images/bg.png');
  }
</style>

<script>
  import AppNav from '../components/app-nav.vue'
  import SliderBlock from '../components/slider.vue'
  var modal = weex.requireModule('modal') 

  export default {
    components: { AppNav, SliderBlock},
    methods: {
      
    }
  }
</script>