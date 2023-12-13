<!--
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-10 18:38:33
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-10 18:58:24
 * @Description: 🏠 主页图标按钮
-->
<template>
    <SvgIcon
        icon="home"
        size="4.5vh"
        @click="toHome" />
</template>
<script setup lang="ts">
import SvgIcon from '@/components/common/SvgIcon.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
/**
 * 前往首页
 */
const toHome = () => {
    router.push('/')
}
</script>
