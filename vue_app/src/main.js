import Vue from 'vue'
import App from './App.vue'
import qs from 'qs'

Vue.prototype.$qs=qs;
Vue.config.productionTip = false
//引入axios和vue-axios固定操作写法
import axios from 'axios'
//import VueAxios from 'vue-axios'

//Vue.use(VueAxios,axios)
Vue.prototype.axios = axios
//默认配置：例如服务器的根目录
axios.defaults.baseURL = 
"http://127.0.0.1:5050/"
//跨域问题：解决方法
axios.defaults.headers = 
{"content-type":"application/x-www-form-urlencoded"}
//配置请求时保存session信息
axios.defaults.withCredentials=true

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import {router} from './routes/router.js'
import store from './store'
import Fuwu from './components/Fuwu.vue'

//全局组件
Vue.component("fuwu",Fuwu)
Vue.component("my-header",Header)
Vue.component("my-footer",Footer)

new Vue({
  name: 'App',
  router:router,
  store:store,
  render: h => h(App),
}).$mount('#app')
