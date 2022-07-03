// 注册vant组件
import { Button, NavBar, Tabbar, TabbarItem, Cell, Grid, GridItem } from 'vant'
const elements = [Button, NavBar, Tabbar, TabbarItem, Cell, Grid, GridItem]

export default function (Vue) {
  elements.forEach((item) => Vue.use(item))
}
