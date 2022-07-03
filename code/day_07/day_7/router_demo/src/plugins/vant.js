import { Button, RadioGroup, Radio } from 'vant'
const elements = [Button, RadioGroup, Radio]

export default function (Vue) {
  elements.forEach((el) => {
    Vue.component(el.name, el)
  })
}
