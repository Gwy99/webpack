<template>
  <div>
    <label>
      <span>用户名:</span>
      <input type="text" placeholder="请输入账号" />
    </label>

    <br />

    <label>
      <span>密码:</span>
      <input type="text" placeholder="请输入密码" />
    </label>
  </div>
</template>

<script>
export default {
  created() {
    console.log('account被创建了')
  },
  destroyed() {
    console.log('account被销毁了')
  },
  activated() {
    console.log('account被激活了')
  },
  deactivated() {
    console.log('account失活了')
  }
}
</script>

<style></style>
