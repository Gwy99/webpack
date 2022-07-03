<template>
  <div class="app">
    <MyHeader title="购物车" />
    <component :is="componentName"></component>
    <MyFooter :tabList="tabList" @change-component="componentName = $event" />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue'
export default {
  components: { MyHeader, MyFooter, MyGoodsList, MyGoodsSearch },
  data() {
    return {
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList'
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch'
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo'
        }
      ],
      componentName: MyGoodsList
    }
  }
}
</script>

<style>
.app {
  padding: 50px, 0;
}
</style>
