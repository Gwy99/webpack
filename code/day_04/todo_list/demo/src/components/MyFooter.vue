<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>数量值:{{ undoneCount }}</strong></span
    >
    <ul class="filters">
      <li v-for="item in lis" :key="item.id">
        <a
          :class="{ selected: item.isSelected }"
          href="javascript:;"
          @click="changeState(item)"
          >{{ item.name }}</a
        >
      </li>
    </ul>
    <button @click="delDone" class="clear-completed">清除已完成</button>
  </footer>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  props: ['list'],
  data() {
    return {
      lis: [
        { id: uuidv4(), name: '全部', isSelected: true },
        { id: uuidv4(), name: '未完成', isSelected: false },
        { id: uuidv4(), name: '已完成', isSelected: false }
      ]
    }
  },
  methods: {
    changeState(item) {
      this.lis.forEach((i) => (i.isSelected = i === item))
      this.$emit('change-state', item.name)
    },
    delDone() {
      this.$emit('del-done')
    }
  },
  computed: {
    undoneCount() {
      return this.list.reduce((pre, curr) => {
        if (curr.isDone) {
          return pre
        } else {
          return pre + 1
        }
      }, 0)
    }
  }
}
</script>
