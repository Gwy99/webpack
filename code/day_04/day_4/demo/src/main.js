import Vue from "vue";
import App from "./App.vue";
// import { install } from "@/global/component";
// import Mypannel from "@/components/MyPannel.vue";
// Vue.component("Mypannel", MyPannel);
// Vue.use(install);

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");