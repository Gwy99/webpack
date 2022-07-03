<template>
  <div>
    <MyHeader :list="list"></MyHeader>
    <MyMain
      :list="list"
      :currentState="currentState"
      @del-todo="delTodo"
    ></MyMain>
    <MyFooter
      @change-state="currentState = $event"
      @del-done="delDone"
      :list="list"
    ></MyFooter>
  </div>
</template>

<script>
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
import MyMain from './components/MyMain.vue'

const TODOLIST = 'TODO-LIST'
export default {
  components: { MyFooter, MyHeader, MyMain },
  data() {
    return {
      currentState: '全部',
      list: JSON.parse(localStorage.getItem(TODOLIST)) || []
    }
  },
  methods: {
    delTodo(id) {
      // 找出删除的哪一项，干掉
      this.list = this.list.filter((item) => item.id !== id)
      console.log(this.list)
    },
    delDone(isDone) {
      this.list = this.list.filter((item) => !item.isDone)
    }
  },
  watch: {
    deep: true,
    immediate: true,
    handler(newList) {
      localStorage.setItem(TODOLIST, JSON.stringify(newList))
    }
  }
}
</script>

<style></style>
