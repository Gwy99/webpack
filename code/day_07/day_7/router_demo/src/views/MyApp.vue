<template>
  <div class="app">
    <div class="footer_wrap">
      <!-- <router-link to="/find?musicname=七里香">发现音乐</router-link> -->
      <router-link :to="{ path: '/find', query: { musicname: '七里香' } }"
        >发现音乐</router-link
      >
      <router-link
        :to="{
          name: '我的音乐',
          params: {
            musicname: '一路向北'
          }
        }"
        >我的音乐</router-link
      >
      <router-link to="/part">朋友</router-link>
    </div>
    <button @click="goMusic">跳到我的音乐</button>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goMusic() {
      this.$router.replace('/my')
      // this.$router.push({
      //   name: '我的音乐',
      //   params: {
      //     musicname: '夜夜夜夜'
      //   }
      // })
    }
  }
}
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
.router-link-active {
  background-color: pink !important;
}
.app {
  padding-top: 100px;
}
</style>
