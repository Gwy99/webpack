<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul>
      <li v-for="item in arr" :key="item.id">
         {{item.name}}
         <button @click="item.count++">买书</button>
      </li>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for="item in arr" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>{{item.count}}</td>
        <td>{{item.price*item.count}}</td>
      </tr>
    </table>
    <p>总价格为:{{totalPrice}} </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        { id:1,
          name: "水浒传",
          price: 107,
          count: 0,
        },
        {
          id:2,
          name: "西游记",
          price: 192,
          count: 0,
        },
        {
          id:3,
          name: "三国演义",
          price: 219,
          count: 0,
        },
        {
          id:4,
          name: "红楼梦",
          price: 178,
          count: 0,
        },
      ],
    };
  },
  computed: {
    sum() {
      return 
     },
    totalPrice() { 
      this.arr.reduce((sum, arr) => {
        return (sum+=arr.price*arr.count)
       },0)
    }
  }
};
</script>