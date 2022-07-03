<template>
  <div>
    {{new Date() | timeFormat}}
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() { 
    return {
      
    }
  },
  filters: {
    timeFormat() { 
      return [dayjs(new Date()).format('YYYY/MM/DD'),dayjs(new Date()).format('YYYY-MM-DD')]
    }
  }
}
</script>

<style>

</style>