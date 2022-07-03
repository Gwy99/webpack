<template>
  <div>
    <label>手机号:<input type="tel" v-model="tel"></label>
    <p>{{person}}</p>
    <button @click="person = {name:'大烧饼',age:2}">换人</button>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      tel: '',
      person: {
        name: '烧饼',
        age:1
      }
    }
  },
  watch: {
    tel(newVal, oldVal) { 
      console.log(newVal, oldVal);
    },
    person: {
      deep: true,
      immediate:true,
      handler(newVal, oldVal) { 
      console.log(newVal, oldVal);
    },
    }
  }

 }
</script>