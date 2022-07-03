<template>
  <div id="#app">
    <ul>
      <li v-for="(item ,index) in myArr" :key="index">{{item}}</li>
    </ul>
    <button @click="up">走一走</button>
  </div>
</template>

<script>

export default {
  data() { 
    return { 
      myArr:['吴彦祖','陈冠希','古天乐']
    }
  },
  methods: {
    up() { 
      this.myArr.push(this.myArr.shift())
    }
  }
};
</script>

<style >

</style>