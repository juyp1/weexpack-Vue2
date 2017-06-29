<template>
  <div class="app-nav">
    <div class="nav-list">
      <div class="nav-item" @click="jump('/index')">
        <image class="nav-img" src="/images/1.png"></image>
        <text class="nav-text">首页</text>
      </div>
      <div class="nav-item">
        <image class="nav-img" src="http://www.b2cf.cn/images/youpin3.jpg"></image>
        <text class="nav-text">转让</text>
      </div>
      <div class="nav-item">
        <image class="nav-img" src="http://www.b2cf.cn/images/youpin3.jpg"></image>
        <text class="nav-text">需求</text>
      </div>
      <div class="nav-item" @click="jump('/login')">
        <image class="nav-img" src="http://www.b2cf.cn/images/youpin3.jpg"></image>
        <text class="nav-text">我的</text>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .nav-item{
    flex:1;
    justify-content: center;
    align-items:center;
    text-align: center;
  };

  .app-nav{
    left: 0px;
    position: fixed;
    bottom: 0px;
    right: 0px;
    z-index: 2000;
    background-color: #ffffff;
  }

  .nav-list{
    flex-direction: row;
    height: 101.38px;
  }

  .nav-img{
    width: 55.55px;
    height: 55.55px;
  }

  .nav-text{
    color: #999999;
    font-size: 23.61px;
  }
</style>