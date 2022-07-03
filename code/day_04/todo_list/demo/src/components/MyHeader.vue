<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="addTodo"
      v-model="task"
    />
  </header>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  props: ['list'],
  data() {
    return {
      task: ''
    }
  },
  methods: {
    addTodo() {
      if (this.task.trim() === '') {
        alert('输入任务名')
        this.task = ''
        return
      } // 首先要生成todo对象
      const todo = {
        id: uuidv4(),
        name: this.task,
        isDone: false
      } // 添加到list就可以
      this.list.push(todo) // 清空数据
      this.task = ''
    }
  },
  computed: {
    isAll: {
      get() {
        return this.list.every((item) => item.isDone)
      },
      set(newChecked) {
        this.list.forEach((item) => (item.isDone = newChecked))
      }
    }
  }
}
</script>
