<template>
  <div class="my-product">
    <h3>标题: {{title}}</h3>
    <p>价格: {{price}}</p>
    <p>{{desc}}</p>
    <button @click="cut">速来砍我</button>
  </div>
</template>

<script>
export default {
  props: ['title', 'price', 'desc', 'goods','id'],
  methods: {
    cut() { 
     this.$emit('sub-price',this.id)
    }
  },
}

</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>