<template>
  <div id="#app">
    <ul>
      <li v-for="(item,index) in myArr" :key="item">
      <span>{{item}}</span>
      <button @click="del(index)">删除</button>
      </li>
    </ul>
<button @click="add">生成</button>
  </div>
</template>

<script>

export default {
  data() { 
    return { 
      myArr:[1,5,3]
    }
  },
  methods: {
    del(index) {
      this.myArr.splice(index,1)
    },
    add() { 
      this.myArr.push(Math.floor(Math.random()*10))
    }
  }
};
</script>

<style >

</style>