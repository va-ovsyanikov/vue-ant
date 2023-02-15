import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Notifications from '@kyvg/vue3-notification'
import App from './App.vue'
import router from '@/router'
import './assets/style.less'

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App);
const pinia = createPinia();
app.use(VueAxios, axios).provide("axios", app.config.globalProperties.axios)
app.use(router)
app.use(Notifications)
app.use(pinia)
app.mount('#app')
