<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll"/>
    <button @click="btn">反选</button>
    <ul>
      <li v-for="(item,index) in arr" :key="index">
        <input type="checkbox" v-model="item.c" />
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// import { get } from 'http';
// import { set } from 'vue/types/umd';

export default {
  data() {
    return {
      arr: [
        {
          name: '猪八戒',
          c: false
        },
        {
          name: '孙悟空',
          c: false
        },
        {
          name: '唐僧',
          c: false
        },
        {
          name: '白龙马',
          c: false
        }
      ]
    }
  },
  methods: {
    /* changeAll(e) {
      this.arr.forEach((item) =>(item.c = e.target.checked));
     } */
    btn() { 
      this.arr.forEach((item) => item.c=!item.c)
    }
  },
  computed: {
    isAll:{
      // const flag = this.arr.every((item) => { 
      //   if (item.c === true) {
      //     return true
      //   } else {
      //     return false
      //   }
      // })
      // console.log(flag);
      // return flag
      get() { 
        return this.arr.every((item)=>item.c)
      },
      set(value) {
        this.arr.forEach((item)=>{item.c=value})
       }
      
    }
  }
}
</script>