/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-11-13 21:22:26
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-10 23:14:39
 * @Description: main主文件
 */
import { createApp } from 'vue'
import '@/assets/style/base.scss'
import '@/assets/style/element_plus.scss'
import App from './App.vue'
import router from '@/router/index'
import 'virtual:svg-icons-register'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(router).mount('#app')
