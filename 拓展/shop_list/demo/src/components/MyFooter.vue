<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="(item, index) in tabList"
      :key="index"
      :class="{ current: currentIndex === index }"
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
        if (data.length > 2 && data.length < 5) {
          return true
        } else {
          throw new Error('你输入的列表长度有误')
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
    changeComponent(componentName, index) {
      this.currentIndex = index
      this.$emit('change-component', componentName)
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
}
</style>
