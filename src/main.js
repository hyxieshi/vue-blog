import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
// Vue.use(ElementUI);
Vue.use(ViewUI);



new Vue({
  router,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')