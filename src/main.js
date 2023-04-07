import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Fullscreen from 'vue-fullscreen';

import MinderCase from './export'
import App from './App.vue';


Vue.use(ElementUI);
Vue.use(MinderCase);
Vue.use(Fullscreen);

new Vue({
  el: '#app',
  render: h => h(App)
})
