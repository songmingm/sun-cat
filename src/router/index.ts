/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-11-12 04:11:46
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-11-12 15:10:52
 * @Description: 路由配置项
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/pages/LoginPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
