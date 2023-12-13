<!--
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-07 22:10:56
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-10 18:44:45
 * @Description: 🧩 dock 栏的 app
-->
<template>
    <component
        :is="DarkSwitch"
        class="app" />
    <component
        :is="HomeBtn"
        class="app" />
</template>
<script setup>
import DarkSwitch from '@/components/func/DarkSwitch.vue'
import HomeBtn from '@/components/func/HomeBtn.vue'
const appSize = '4.5vh'
</script>
<style lang="scss" scoped>
.app {
    cursor: pointer;
    height: v-bind(appSize);
    width: v-bind(appSize);
    margin: 0 1vw;
    border-radius: 0.5vw;
    @include useTheme {
        background-color: getVar('dock_app_bg');
    }
    transition: transform 0.3s ease-in-out;
}
.app:hover {
    transform: scale(1.3);
}
.app:not(:hover) {
    transform: scale(1);
}
</style>
