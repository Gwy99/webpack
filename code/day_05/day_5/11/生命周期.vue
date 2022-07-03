<template>
  <div class="box">
    <p>你好vue</p>
    <span
      >{{ num }} <button @click="num++">点我+1</button>
      <button @click="fn">点我销毁</button></span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello vue',
      num: 0
    }
  },
  methods: {
    fn() {
      this.$destroy()
    }
  },
  beforeCreate() {
    console.log(this.msg, this.fn)
    console.log('beforeCreate执行了')
  },
  created() {
    console.log(this.msg, this.fn)
    console.log('created执行了')
  },
  beforeMount() {
    console.log(this.msg, this.fn, document.querySelectorAll('.box'))
  },
  mounted() {
    console.log(this.msg, this.fn, document.querySelectorAll('.box'))
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    console.log('beforeDestroy执行了')
  },
  destroyed() {
    console.log('destroyed执行了')
  }
}
</script>

<style></style>
