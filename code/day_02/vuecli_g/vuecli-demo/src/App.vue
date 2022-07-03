<template>
  <div id="app">
   <!-- <ul>
    <li v-for="(item,index) in arr" :key="index">
    {{index}}
<span>{{item}}</span>
    </li>
   </ul> -->

   <!-- <ul>
    <li v-for="(value,key) in person" :key="key">
       {{'属性值'+key}} 
       {{'属性名'+value}} 
    </li>
   </ul> -->

<!-- 循环char -->
<!-- <ul>
    <li v-for="(char,index) in 'person'" :key="key">
       {{'索引值'+index}} 
       {{'属性名'+char}} 
    </li>
</ul> -->


<!-- 循环多维数组 -->
<ul>
    <li v-for="item in stuArr" :key="item.id">
       {{item.id}} 
       {{item.name}} 
       {{item.sex}} 
       {{item.hobby}} 
    </li>
</ul>


  </div>
</template>

<script>
export default {
  data() {
    return {
     arr:[0,1,2,3,4,5],
     person:{
      name:'mzh',
      age:18,
      stuArr: [
        {
          id: 1001,
          name: "孙悟空",
          sex: "男",
          hobby: "吃桃子",
        },
        {
          id: 1002,
          name: "猪八戒",
          sex: "男",
          hobby: "背媳妇",
        },
      ],
     }
    }
  }
}
</script>

<style>
</style>