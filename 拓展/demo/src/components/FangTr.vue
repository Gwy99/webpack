<template>
  <tr>
    <td><input type="checkbox" v-model="item.checked" /></td>
    <td>{{ item.name }}</td>
    <td>{{ item.price }}</td>
    <td>
      <button @click="delNum(item)">-</button>{{ item.num
      }}<button @click="addNum(item)">+</button>
    </td>
    <td>{{ total }}</td>
    <td><button @click="deleteTr(item)">删除</button></td>
  </tr>
</template>

<script>
export default {
  props: ['item', 'goodList'],
  computed: {
    total () {
      return this.item.price * this.item.num
    }
  },
  methods: {
    addNum (item) {
      this.$emit('add', item)
    },
    delNum (item) {
      this.$emit('del', item)
    },
    deleteTr (item) {
      this.$emit('delete', item)
    }
  }
}
</script>

<style></style>
