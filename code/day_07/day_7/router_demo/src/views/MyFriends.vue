<template>
  <div>
    我的朋友
    <hr />
    <router-link to="part/lisi">朋友李四</router-link>&nbsp;&nbsp;
    <router-link to="part/zhangsan">朋友张三</router-link>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
