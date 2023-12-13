/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-11-12 04:11:46
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-10 18:55:28
 * @Description: 路由配置项
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/LoginPage.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/pages/RegisterPage.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/HomePage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
