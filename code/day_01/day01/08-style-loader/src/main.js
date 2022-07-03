import { marquee } from './marquee.js'
import { tab } from './tab.js'
tab()
marquee()

// 1. 必须在入口去引入
// .css不能省略的
/* 
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
*/
import './styles/index.css'