import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

let axiosInstance = axios.create({
    baseURL: 'http://car-stock.test/',
    timeout: 30000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})

const app = Vue.createApp(App)
app.use(VueAxios, axiosInstance)
app.mount('#app')