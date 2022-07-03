<template>
  <div class="my-tab-bar">
    <div
      v-for="(item, index) in tabList"
      :key="index"
      :class="['tab-item', { current: currentIndex === index }]"
      @click="changeComponent(item.componentName, index)"
    >
      <!-- 图标 -->
      <span :class="`iconfont ${item.iconText}`"></span>
      <!-- 文字 -->
      <span class="text">{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
      required: true,
      validator(data) {
        const len = data.length
        if (len > 2 && len < 5) {
          return true
        } else {
          throw new Error('长度必须在2~5之间')
        }
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    changeComponent(compName, index) {
      this.currentIndex = index
      this.$emit('change-component', compName)
    }
  }
}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.text {
  margin-top: -10px;
}

.current {
  color: #1d7bff;
  .iconfont {
    color: #1d7bff;
  }
}
</style>
