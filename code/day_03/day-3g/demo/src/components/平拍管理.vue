<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id" >
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <td :class='{red: item.price > 100 }'> {{item.price}} </td>
            <td>{{ item.time | timeFormat}}</td>
            <td ><a href="#" @click="delAsset(item)">删除</a></td>
          </tr>
           <!-- 计算价格 -->
           <tr>
            <td>统计</td>
            <td colspan="2">总价钱为:{{totalPrice}}</td>
            <td colspan="2">平均价:{{averPrice}}</td>
           </tr>
        </tbody>
          
           

        <tfoot v-show="!list.length">
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
           
      </table>

      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model.number="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="addAsset">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      name: "", // 名称
      price: 0, // 价格
      list:JSON.parse(localStorage.getItem('myList'))||[]
    };
  },
  methods: {
    addAsset() { 
      if (!this.name.trim() || this.price === 0) { 
        return alert('请填写完整')
      }
     const id=this.list.length === 0 ? 0 : this.list.at(-1).id + 1
      const asset = {
        id,
        name: this.name,
        price: this.price,
        time: new Date(),
      }
      this.list.push(asset)
      this.name = ''
      this.price=''
    },
    delAsset(item) { 
     this.list=this.list.filter((i) => i !== item)
    }
  },
  filters: {
    timeFormat(time) { 
      return dayjs(time).format('YYYY/MM/DD')
    }
  },
  computed: {
    totalPrice() { 
      return this.list.reduce((pre,curr) => pre+curr.price,0)
    },
    averPrice() { 
      return this.list.length===0?0:(this.totalPrice/this.list.length).toFixed(2)
    }
  },
  watch: {
    list: {
      deep: true,
      immediate: true,
      handler() { 
        localStorage.setItem('myList',JSON.stringify(this.list)) 
      }
    }
  }
};
</script>

<style >
.red{
  color: red;
}
</style>