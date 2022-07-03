<template>
  <div class="app">
    <my-header title="tabber案例" />
    <component :is="componentName"></component>
    <my-footer :tabList="tabList" @change-component="componentName = $event" />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue'
import MyUserInfo from './views/MyUserInfo'
export default {
  components: { MyHeader, MyFooter, MyGoodsList, MyGoodsSearch, MyUserInfo },
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
      componentName: 'MyGoodsList'
    }
  }
}
</script>

<style>
.app {
  padding: 50px 0;
}
</style>
