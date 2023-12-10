<!--
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-07 22:10:56
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-08 22:28:19
 * @Description: 🧩 dock 栏的 app
-->
<template>
    <component
        :is="DarkSwitch"
        class="app" />
</template>
<script setup>
import DarkSwitch from '../func/DarkSwitch.vue'
</script>
<style lang="scss" scoped>
.app {
    height: 4.5vh;
    width: 4.5vh;
    margin: 0 1vw;
    border-radius: 0.5vw;
    @include useTheme {
        background-color: getVar('dock_app_bg');
    }
}
</style>
