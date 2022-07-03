import { marquee } from './marquee.js'
import { tab } from './tab.js'
tab()
marquee()


import './styles/index.css'

// 引用less
import './styles/index.less'

// 以原生js的方式 html插入两张图片

// 1. 引入图片
//  - 图片的src属性
import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

// 2. 创建图片节点
const gif = document.createElement('img')
const png = document.createElement('img')

// 3. 给src赋值
gif.src = gifSrc
png.src = pngSrc

// 4 插入节点
document.body.appendChild(gif)
document.body.appendChild(png)

// 引入字体图标
import './assets/fonts/iconfont.css'

const fn = () => {
  console.log('你好')
}

console.log(fn)