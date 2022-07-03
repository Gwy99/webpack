import { Button, Tabbar, TabbarItem } from 'vant'
const element = [Button, Tabbar, TabbarItem]
export default function (Vue) {
  element.forEach((item) => Vue.use(item))
}
