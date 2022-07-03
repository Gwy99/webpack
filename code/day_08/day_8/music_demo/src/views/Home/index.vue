<template>
  <div>
    <van-cell value="推荐歌单" class="title" />
    <van-grid :column-num="3">
      <van-grid-item
        v-for="value in 6"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
  </div>
</template>

<script>
import { reccommendMusic } from '@/api'
export default {
  data() {
    return {
      reccommendList: [] // 推荐歌单
    }
  },
  async created() {
    this.getPersonalized()
  },
  methods: {
    async getPersonalized() {
      const res = await reccommendMusic(6)
      console.log(res)
      // try {
      //   const res = await reccommendMusicAPI(6)
      //   console.log(res)
      // } catch (error) {
      //   console.log('获取错误了')
      // }
    }
  }
}
</script>

<style>
.title {
  background-color: #c71d24;
  color: #fff;
}
</style>
