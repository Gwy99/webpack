<template>
  <div class="pic_box">
    <img :src="dogImgUrl" alt="" />
    <p :style="{ backgroundColor: colorStr }" @click="btn">{{ dogName }}</p>
  </div>
</template>

<script>
export default {
  props: ['dogImgUrl', 'dogName'],
  data() {
    return {
      colorStr: ''
    }
  },
  methods: {
    btn() {
      this.colorStr = `rgb(
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)}
      )`
      this.$emit('love', this.dogName)
    }
  }
}
</script>

<style scoped>
.pic_box {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}
img {
  width: 100%;
  height: 200px;
}
</style>
