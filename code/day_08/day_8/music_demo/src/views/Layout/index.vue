<template>
  <div>
    <!-- 顶部栏 -->
    <van-nav-bar :title="activeTitle" />

    <!-- 挂载点 -->
    <div>
      <router-view></router-view>
    </div>
    <!-- 底部栏 -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" name="首页" replace to="/layout/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" name="搜索" replace to="/layout/search"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTitle: this.$route.meta.title
    }
  },
  watch: {
    $route() {
      this.activeTitle = this.$route.meta.title
    }
  }
}
</script>

<style></style>
