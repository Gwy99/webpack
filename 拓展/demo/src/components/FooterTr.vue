<template>
  <tr>
    <td>合计:</td>
    <td colspan="5">{{ total }}</td>
  </tr>
</template>

<script>
export default {
  props: ['goodList'],
  computed: {
    total () {
      return this.goodList.filter((item) => item.checked === true).reduce((pre, curr) => {
        return pre + curr.num * curr.price
      }, 0)
    }
  }
}
</script>

<style></style>
