<template>
  <div class="slider-c">
    <slider class="slider" interval="4500" @change="onchange">
      <div class="frame" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
        <text class="title">{{img.title}}</text>
      </div>
      <indicator class="indicator"></indicator>
    </slider>
  </div>
</template>

<style scoped>
  .image {
    width: 750px;
    height: 555.55px;
  }

  .slider-c{
    flex-direction: row;
    height: 555.55px;;
    background-color: red;
    width: 750px;;
  }
  .slider {
    width: 750px;
    height: 555.55px;;
    z-index: 10;
    flex:1;
    justify-content: center;
    align-items:center;
    text-align: center;
    background-color: red;
  }
  .title {
    position: absolute;
    bottom: 76.38px;
    left: 32px;
    color: #ffffff;
    font-size: 27.77px;
  }
  .frame {
    width: 750px;
    height: 555.55px;
    position: relative;
  } 
  .indicator {
    width: 750px;
    height: 555.55px;;
    item-color: green;
    item-selected-color: red;
    item-size: 34.72px;
    position: absolute;
    bottom: 80.55px;
    right: 20.83px !important;
    left: inherit !important;
    top: inherit !important;
  }

  .weex-indicator-item{
    background-color: rgba(255,255,255,0.2);
  }

  .weex-indicator-item-active{
    background-color: #ffffff;
  }
</style>

<script>
  export default {
    data () {
      return {
        imageList: [
          { title: '南京邮电大学持有的中天射频电缆有限公司', src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { title: 'item B', src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { title: 'item C', src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
        ]
      }
    },
    methods: {
      onchange (event) {
        console.log('changed:', event.index)
      }
    }
  }
</script>