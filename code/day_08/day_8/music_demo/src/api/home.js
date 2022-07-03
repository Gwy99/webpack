import axios from '@/utils/request'
// eslint-disable-next-line no-unused-vars
export const reccommendMusic = (limit) =>
  axios({
    url: '/personalized',
    params: {
      limit
    }
  })
