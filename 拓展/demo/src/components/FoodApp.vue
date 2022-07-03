<template>
  <div>
    <p>商品清单如下:</p>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item.shopName }}-{{ item.price }}
      </li>
    </ul>
    <MyFood
      v-for="(item, index) in list"
      :key="index + ''"
      :list="list"
      :ind="index"
      :shopName="item.shopName"
      :count="item.count"
      @addE="addFn"
      @descE="secFn"
    />
    <p>总价为:{{ allPrice }}</p>
  </div>
</template>

<script>
import MyFood from '@/components/MyFood.vue'
export default {
  data() {
    return {
      list: [
        {
          shopName: '可比克薯片',
          price: 5.5,
          count: 0
        },
        {
          shopName: '草莓酱',
          price: 3.5,
          count: 0
        },
        {
          shopName: '红烧肉',
          price: 55,
          count: 0
        },
        {
          shopName: '方便面',
          price: 12,
          count: 0
        }
      ]
    }
  },
  components: {
    MyFood
  },
  methods: {
    addFn(ind) {
      this.list[ind].count++
    },
    secFn(ind) {
      this.list[ind].count--
    }
  },
  computed: {
    allPrice() {
      return this.list.reduce(
        (sum, item) => (sum += item.count * item.price),
        0
      )
    }
  }
}
</script>

<style></style>
