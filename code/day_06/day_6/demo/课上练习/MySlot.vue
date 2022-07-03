<template>
  <div id="app">
    <my-pannel />
    <my-pannel title="赠汪伦">
      <template #default="scope">
        {{ scope.tip2 }}
        <p>李白乘舟将欲行</p>
        <p>忽闻岸上踏歌声</p>
        <p>桃花潭水深千尺</p>
        <p>不及汪伦赠我情</p>
      </template>

      <template #comment="{ tip: { msg } }">
        <p>{{ msg }}</p>
        <i style="color: red">李白大诗仙</i>
      </template>
    </my-pannel>
  </div>
</template>

<script>
import MyPannel from './components/MyPannel.vue'
export default {
  components: {
    [MyPannel.name]: MyPannel
  }
}
</script>

<style></style>
