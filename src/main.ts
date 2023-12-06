/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-11-13 21:22:26
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-06 20:16:43
 * @Description: main主文件
 */
import { createApp } from 'vue'
import '@/assets/style/base.scss'
import App from './App.vue'
import router from '@/router/index'
import 'virtual:svg-icons-register'
const app = createApp(App)
app.use(router).mount('#app')
