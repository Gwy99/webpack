<template>
  <div>
    <MyTable :goodsList="goodsList">
      <template #head>
        <th>#</th>

        <th>商品名称</th>

        <th>价格</th>

        <th>标签</th>

        <th>操作</th>
      </template>

      <template #body="{ item }">
        <td>{{ item.id }}</td>

        <td>{{ item.goods_name }}</td>

        <td>{{ item.goods_price }}</td>

        <td>
          <AddTag @add-tag="addTag(item.tags, $event)"></AddTag>
          <span
            class="badge bg-warning text-dark"
            style="margin-left: 5px"
            v-for="(i, index) in item.tags"
            :key="index"
            >{{ i }}</span
          >
        </td>

        <td>
          <button class="btn btn-danger btn-sm" @click="delGoods(item.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue'
import axios from '../utils/request.js'
import AddTag from '../components/AddTag.vue'
export default {
  components: {
    MyTable,
    AddTag
  },
  data() {
    return {
      goodsList: []
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    async getGoodsList() {
      const { data } = await axios({ url: '/api/goods' })
      this.goodsList = data.data
    },
    delGoods(id) {
      this.goodsList = this.goodsList.filter((item) => item.id !== id)
    },
    addTag(tags, tagName) {
      tags.push(tagName)
    }
  }
}
</script>

<style></style>
