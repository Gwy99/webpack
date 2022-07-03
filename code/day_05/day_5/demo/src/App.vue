<template>
  <div class="app">
    <MyHeader title="购物车案例" color="lightpink" background="lightblue" />
    <MyGoods v-for="item in goodsList" :key="item.goods_id" :goods="item" />
    <MyFooter :goodsList="goodsList" />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyGoods from './components/MyGoods.vue'
import MyFooter from './components/MyFooter.vue'
import axios from 'axios'
export default {
  components: { MyHeader, MyGoods, MyFooter },
  data() {
    return {
      goodsList: []
    }
  },
  created() {
    this.getGoods()
  },
  methods: {
    async getGoods() {
      const res = await axios({ url: 'api/cart' })
      this.goodsList = res.data.list
    }
  }
}
</script>

<style scoped>
.app {
  box-sizing: border-box;
  padding: 50px 0;
  max-height: 100vh;
  overflow: auto;
}
</style>
