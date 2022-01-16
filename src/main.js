import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import axios from 'axios'

//css
import "./assets/css/normalize.css";
import "./assets/css/layout.css";

//js
import router from "./assets/router/router.js";

Vue.config.productionTip = false;
Vue.use(Router);
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

router.replace('/').catch(()=>{});  //초기페이지
