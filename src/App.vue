<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active"  active-color="#484848" v-show="$route.meta.navShow">
      <van-tabbar-item to="/home"  >
        <span>首页</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.index_active : icon.index_normal">
      </van-tabbar-item>
      <van-tabbar-item to="/whole"  >
        <span>全部口子</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.whole_active : icon.whole_normal">
      </van-tabbar-item>
      <van-tabbar-item to="/member"  >
        <span>我的</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.member_active : icon.member_normal">
      </van-tabbar-item>
    </van-tabbar>
   
  </div>
</template>

<script>
export default {
  name: 'App',
   data() {
    return {
      active: 0,
      icon:{
        index_normal:"../static/images/tabbar_icon/index-0.png",
        index_active:"../static/images/tabbar_icon/index-1.png",
        whole_normal:"../static/images/tabbar_icon/whole-0.png",
        whole_active:"../static/images/tabbar_icon/whole-1.png",
        assess_normal:"../static/images/tabbar_icon/assess-0.png",
        assess_active:"../static/images/tabbar_icon/assess-1.png",
        member_normal:"../static/images/tabbar_icon/member-0.png",
        member_active:"../static/images/tabbar_icon/member-1.png",
      }
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 12px
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  html,page{
    background-color: #F0F2F5;
  }
  .van-nav-bar__title{
    font-weight: 500;
    font-size: 18px;
  }
</style>
