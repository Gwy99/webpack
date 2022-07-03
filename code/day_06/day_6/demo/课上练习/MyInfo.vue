<template>
  <div>
    <label>
      <span>人生格言:</span>
      <input type="text" placeholder="请输入账号" />
    </label>

    <br />

    <label>
      <span>自我介绍:</span>
      <textarea cols="20" rows="5"></textarea>
    </label>
  </div>
</template>

<script>
export default {
  created() {
    console.log('info被创建了')
  },
  destroyed() {
    console.log('info被销毁了')
  }
}
</script>

<style></style>
