<template>
  <div>
    {{fullName}}
    <button @click=" fullName = '烧饼'">修改烧饼</button>
  </div>
</template>

<script>
// import { get } from 'http'

export default { 
  data() { 
    return {
      firstName: '张',
      lastName:'三'
    }
  },
  computed: {
    fullName:{ 
      get(){
        return this.firstName+this.lastName
      },
      set(value) {
        this.firstName=value[0]
        this.lastName=value[1]
      }
    }
  }
}
</script>