<template>
<div id="id">
{{msg | toUp}}
<p :title="msg | toUp('ab','cd')">wsygxsb</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      msg:'mzh sb wo xihuan ni'
    }
  },
  filters: {
    toUp(arg1, ...args) { 
      console.log(args);
      // return arg1.toUpperCase()
    }
    },
};
</script>

<style>

</style>