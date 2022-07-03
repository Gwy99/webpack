<template>
  <div>
    <span>{{ shopName }}</span>
    <button @click="add(ind)">+</button>
    <span>{{ count }}</span>
    <button @click="sec(ind)">-</button>
  </div>
</template>

<script>
export default {
  props: ['shopName', 'ind', 'count', 'list'],
  data() {
    return {}
  },
  methods: {
    add(ind) {
      this.$emit('addE', ind)
    },
    sec(ind) {
      this.$emit('descE', ind)
    }
  }
}
</script>

<style></style>
