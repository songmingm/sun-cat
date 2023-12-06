import ScreenDisplay from '@/components/common/ScreenDisplay.vue';
<!--
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-11-12 14:44:48
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-06 21:11:43
 * @Description: 注册页面
-->
<template>
    <select v-model="theme">
        <option value="os">跟随系统</option>
        <option value="light">亮色</option>
        <option value="dark">暗色</option>
    </select>
    <div class="text">我是大傻逼</div>
</template>
<script setup lang="ts">
import useTheme from '@/utils/theme'

const { theme } = useTheme()
</script>
<style lang="scss" scoped>
.text {
    font-size: 50px;
    @include useTheme() {
        color: getVar('text');
    }
}
</style>
