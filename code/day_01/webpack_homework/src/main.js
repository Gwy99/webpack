import { marqueen } from "./marqueen";
import { tabs } from "./tab";
tabs()
marqueen()

//引入样式
import './styles/index.css'
import './styles/tab.less'

//引入图片
import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

//创建图片节点
const gif = document.createElement('img')
const png = document.createElement('img')

//给src赋值
gif.src = gifSrc
png.src = pngSrc

//插入节点
document.body.appendChild(gif)
document.body.appendChild(png)

//引入字体
import './assets/fonts/iconfont.css'


const fn = () => {
    console.log('你好');
}
console.log(fn());

//引入vue
import App from './App.vue' // 根vue文件
import Vue from 'vue' // 引入vue.js对象

new Vue({
        render: h => h(App) // 渲染函数, 渲染App组件里的标签
    }).$mount('#app') // 把vue文件的标签结构 -> 挂载到id为app的标签里