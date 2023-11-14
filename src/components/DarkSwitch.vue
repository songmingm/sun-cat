<!--
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-11-12 17:51:07
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-11-13 22:02:21
 * @Description: 夜间模式切换组件
-->
<template>
    <span
        class="dark-switch"
        @click="toggleDark()">
        <SvgIcon
            v-if="!isDark"
            icon="light"
            :size="svgSize" />
        <SvgIcon
            v-else
            icon="dark"
            :size="svgSize" />
    </span>
</template>
<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import SvgIcon from '@/components/common/SvgIcon.vue'

const svgSize: string = '50px'
const isDark = useDark() // 当前是否为夜间模式
const toggleDark = useToggle(isDark) // 切换模式
</script>
<style lang="scss">
.dark-switch {
    cursor: pointer;
}
</style>
