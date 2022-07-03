<template>
  <div>
    <div class="title">
      <h4>{{ title }}</h4>
      <span class="btn" @click="isShow = !isShow">
        {{ isShow ? '收起' : '展开' }}
      </span>
    </div>
    <div class="container" v-show="isShow">
      <slot tip="请你显示四行" tip2="我是你爹">
        <p>床前明月光,</p>
        <p>疑是地上霜</p>
        <p>举头望明月，</p>
        <p>低头思故乡。</p>
      </slot>
    </div>
    <hr />
    <div class="comment">
      <slot name="comment" :tip="{ msg: '请你文明评论' }"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPannel',
  props: {
    title: {
      type: String,
      default: '静夜思'
    }
  },
  data() {
    return {
      isShow: false
    }
  }
}
</script>

<style lang="less">
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #ccc;
      padding: 0 1em;
    }
    .title h4 {
      line-height: 2;
      margin: 0;
    }
    .container {
      border: 1px solid #ccc;
      padding: 0 1em;
    }
    .btn {
      /* 鼠标改成手的形状 */
      cursor: pointer;
    }
  }
}
</style>
