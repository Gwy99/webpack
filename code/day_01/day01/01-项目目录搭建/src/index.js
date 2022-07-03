// 模块化语法

/* 
Uncaught SyntaxError: Cannot use import statement outside a module (at index.js:2:1)

*/
import { marquee } from './marquee.js'
import { tab } from './tab.js'
tab()
marquee()