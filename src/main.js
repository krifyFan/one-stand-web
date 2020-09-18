import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import validator from 'validator'
import 'bootstrap'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './rem.js'

Vue.config.productionTip = false

Vue.use(ViewUI);
Vue.use(validator)
Vue.config.devtools = true
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
