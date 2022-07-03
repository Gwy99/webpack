<template>
  <div>
    <SubComponent ref="son" />
  </div>
</template>

<script>
import SubComponent from './components/SubComponent.vue'
export default {
  components: { SubComponent },
  mounted() {
    console.log(this)
    console.log(this.$refs.son.msg)
    this.$refs.son.fn()
  }
}
</script>

<style></style>
