<template>
  <div>
    <p>{{ books }}</p>
    <input
      type="text"
      placeholder="请输入图书名"
      v-model="bookInfo.bookname"
    /><br />
    <input
      type="text"
      placeholder="请输入出版社"
      v-model="bookInfo.publisher"
    /><br />
    <input
      type="text"
      placeholder="请输入作者名"
      v-model="bookInfo.author"
    /><br />
    <button @click="addBook">添加图书</button>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = 'http://123.57.109.30:3006'
axios.defaults.timeout = 300
export default {
  data() {
    return {
      books: [],
      bookInfo: {
        bookname: '',
        publisher: '',
        author: ''
      }
    }
  },
  created() {
    this.getBooks()
  },
  methods: {
    async getBooks() {
      try {
        const res = await axios({
          url: '/api/getbooks',
          params: {
            bookname: '你好'
          }
        })
        this.books = res.data.data
      } catch (error) {
        alert('获取图书失败')
      }
    },
    async addBook() {
      try {
        const res = await axios({
          url: '/api/addbook',
          method: 'post',
          data: this.bookInfo
        })
        console.log(res)
      } catch (error) {
        alert('添加图书失败')
      }
    }
  }
}
</script>

<style></style>
