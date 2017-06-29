import router from './router'
import App from './App.vue'
import mixins from './mixins'
import store from './store'
import { sync } from 'vuex-router-sync'

Vue.mixin(mixins)

new Vue(Vue.util.extend({ el: '#root', router, store}, App))

router.push('/')
