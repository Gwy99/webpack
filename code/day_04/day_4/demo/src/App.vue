<template>
  <div>
    <!-- 
      目标: 父(App.vue) -> 子(MyProduct.vue) 分别传值进入
      需求: 每次组件显示不同的数据信息
      步骤(口诀):
        1. 子组件 - props - 变量 (准备接收)
        2. 父组件 - 传值进去
     -->
    <!-- <Product title="好吃的口水鸡" price="50" intro="开业大酬宾, 全场8折"></Product>
    <Product title="好可爱的可爱多" price="20" intro="老板不在家, 全场1折"></Product>
    <Product title="好贵的北京烤鸭" price="290" :intro="str"></Product> -->
  <Product
  v-for="item in list" :key="item.id"
  :title="item.title"
  :price="item.price"
  :desc="item.desc"
  :goods="item"
  :id="item.id"
  @sub-price="list.find((item) =>item.id === $event).price-=1"
  />
  </div>
</template>

<script>
// 1. 创建组件 (.vue文件)
// 2. 引入组件
import Product from './components/MyProduct'
export default {
  data(){
    return {
     list: [
        {
          id: 1,
          title: '超级好吃的棒棒糖',
          price: 18.8,
          desc: '开业大酬宾, 全场8折'
        },
        {
          id: 2,
          title: '超级好吃的大鸡腿',
          price: 34.2,
          desc: '好吃不腻, 快来买啊'
        },
        {
          id: 3,
          title: '超级无敌的冰激凌',
          price: 14.2,
          desc: '炎热的夏天, 来个冰激凌了'
        }
      ]
    }
  },
  methods: {
  //   subPrice(id) {
  //   const target = this.list.find((item) =>  item.id === id )
  //   target.price-=1
  //  },
  },
  // 3. 注册组件
  components: {
    // Product: Product // key和value变量名同名 - 简写
    Product
  }
}
</script>

<style>

</style>