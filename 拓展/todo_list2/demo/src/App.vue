<template>
  <div>
    <MyHeader />
    <MyMain />
    <MyFooter />
  </div>
</template>

<script>
// 引入css样式
import './styles/base.css'
import './styles/index.css'

// 引入组件
import MyHeader from './components/MyHeader.vue'
import MyMain from './components/MyMain.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  components: { MyHeader, MyMain, MyFooter },
  data () {
    return {
      list: [
        { id: 100, name: '吃饭', isDone: true },
        { id: 201, name: '睡觉', isDone: false },
        { id: 103, name: '打豆豆', isDone: true }
      ]
    }
  }
}
</script>

<style></style>
