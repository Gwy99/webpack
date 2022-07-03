<template>
  <div>
    <div v-for="(item,index) in arr" :key="index"
    style="display:inline-block;">
    <input type="checkbox" v-model="checkColArr" :value="item">
    <span>{{item}}</span>
  </div>
  <!-- <p>{{checkColArr}}</p> -->
  <ul>
    <li v-for="(item,index) in checkColArr" :key="index">{{item}}</li>
  </ul>
    
  </div>
</template>

<script>
export default {
  data() { 
    return {
      arr: ['科幻','喜剧','动漫','冒险','科技','军事','娱乐','奇闻','宠物','商业','战争'],
      checkColArr: []
    }
  },
}
</script>

<style>

</style>