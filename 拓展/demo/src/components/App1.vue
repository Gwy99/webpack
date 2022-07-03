<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th><input type="checkbox" v-model="isAll" /> <span>全选</span></th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <FangTr
          @add="add"
          @del="del"
          :goodList="goodList"
          @delete="deleteTr"
          :item="item"
          v-for="(item, index) in goodList"
          :key="index"
        />
      </tbody>
      <tfoot>
        <Footer :goodList="goodList" />
      </tfoot>
    </table>
  </div>
</template>

<script>
import FangTr from './components/FangTr.vue'
import Footer from './components/FooterTr.vue'
export default {
  data () {
    return {
      goodList: [
        {
          name: '诸葛亮',
          price: 1000,
          num: 1,
          checked: false
        },
        {
          name: '蔡文姬',
          price: 1500,
          num: 1,
          checked: false
        },
        {
          name: '妲己',
          price: 2000,
          num: 1,
          checked: false
        },
        {
          name: '鲁班',
          price: 2200,
          num: 1,
          checked: false
        }
      ]
    }
  },
  computed: {
    isAll: {
      get () {
        return this.goodList.every((i) => i.checked)
      },
      set (val) {
        this.goodList.forEach((i) => (i.checked = val))
      }
    }
  },
  components: {
    FangTr,
    Footer
  },
  methods: {
    add (item) {
      this.goodList.forEach((i) => {
        if (i === item) {
          i.num++
        }
      })
    },
    del (item) {
      this.goodList.forEach((i) => {
        if (i === item) {
          if (i.num === 0) return alert('不能为负数')
          i.num--
        }
      })
    },
    deleteTr (item) {
      this.goodList = this.goodList.filter((i) => {
        return i !== item
      })
    }
  }
  // watch: {
  //   isAll () {
  //     this.goodList.forEach((i) => {
  //       i.checked = this.isAll
  //     })
  //   }
  // }
}
</script>

<style></style>
