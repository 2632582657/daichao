// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import { Button,Tabbar, TabbarItem,NavBar, Row, Col,Swipe, SwipeItem,List,Field,Icon,Dialog,} from 'vant';
Vue.use(Button).use(Tabbar).use(TabbarItem).use(NavBar).use(Row).use(Col)
.use(Swipe).use(SwipeItem).use(List).use(Field).use(Icon).use(Dialog);



Vue.config.productionTip = false

axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})


