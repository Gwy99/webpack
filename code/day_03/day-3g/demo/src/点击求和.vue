<template>
  <div>
    <div
      v-for="(item, index) in arr"
      :key="index"
      style="display: inline-block"
    >
      <input type="checkbox" v-model="checkNumArr" :value="item" />
      <span>{{ item }}</span>
    </div>
    <p>你选中的元素,累加的和为:{{ sum }}</p>
    <!-- <span>{{checkNumArr}}</span> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      checkNumArr: [],
    };
  },
  computed: {
    sum() {
      return this.checkNumArr.reduce((pre, curr) => (pre += curr), 0);
    },
  },
};
</script>

<style></style>
