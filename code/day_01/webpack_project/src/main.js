import { tab } from './tab.js'
import { marqueen } from './marqueen'
tab()
marqueen()

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