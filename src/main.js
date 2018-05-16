// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {MdButton, MdContent, MdTabs, MdApp, MdToolbar, MdDrawer, MdList, MdIcon, MdCard, MdField} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css' // This line here

Vue.config.productionTip = false
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdApp)
Vue.use(MdToolbar)
Vue.use(MdDrawer)
Vue.use(MdList)
Vue.use(MdIcon)
Vue.use(MdCard)
Vue.use(MdField)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
