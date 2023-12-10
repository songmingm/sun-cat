<!--
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-11-12 17:51:07
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-10 15:18:47
 * @Description: 夜间模式切换组件
-->
<template>
    <div
        class="dark_switch"
        @click="switchThemeBtn()">
        <SvgIcon
            v-if="theme === 'dark'"
            icon="dark"
            :size="svgSize" />
        <SvgIcon
            v-if="theme === 'light'"
            icon="light"
            :size="svgSize" />
    </div>
</template>
<script lang="ts" setup>
import SvgIcon from '@/components/common/SvgIcon.vue'
import { useTheme } from '@/utils/theme'
import { Ref, ref } from 'vue'
const svgSize: string = '4.5vh'
const theme = useTheme()
const isDark: Ref<boolean> = ref(theme.value === 'dark') // 是否是暗夜模式
const switchThemeBtn = () => {
    isDark.value ? (theme.value = 'light') : (theme.value = 'dark')
    isDark.value = !isDark.value
}
</script>
<style lang="scss">
.dark_switch {
    cursor: pointer;
    height: calc(v-bind(svgSize) + 1vw);
    width: calc(v-bind(svgSize) + 1vw);
}
</style>
