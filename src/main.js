import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import less from 'less'
import "layui-src/dist/css/layui.css";
import "layui-src/dist/layui.all.js";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/css/index.css'

Vue.use(ElementUI);
Vue.use(less)
Vue.prototype.$http = axios
// Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://www.api.sqjtjt.com'
Vue.prototype.$axios = axios
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  $,
  components: { App},
  template: '<App/>'
})

router.beforeEach((to, from, next) =>{
  // console.log(to);
  const token = localStorage.getItem('token')
  if (token) {
    next()
  } else{
    if (to.path === '/'){
      next()
    } else{
      next('/')
    }
  }
})


let htmlWidth =
  document.documentElement.clientWidth || document.body.clientWidth;
//获取htmlDom
let htmlDom = document.getElementsByTagName("html")[0];
//设置html的font-size
htmlDom.style.fontSize = 100*(htmlWidth / 1920) + "px";

