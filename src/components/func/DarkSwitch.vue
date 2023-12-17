<!--
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-11-12 17:51:07
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-17 14:25:41
 * @Description: 夜间模式切换组件
-->
<template>
    <SvgIcon
        :icon="isDark ? 'dark' : 'light'"
        :size="appSize"
        @click="switchThemeBtn()" />
</template>
<script lang="ts" setup>
import SvgIcon from '@/components/common/SvgIcon.vue'
import { useTheme } from '@/utils/theme'
import { Ref, ref } from 'vue'
defineProps({
    appSize: {
        type: String,
        default: '4.5vh'
    }
})
const theme = useTheme()
const isDark: Ref<boolean> = ref(theme.value === 'dark') // 是否是暗夜模式
const switchThemeBtn = () => {
    isDark.value ? (theme.value = 'light') : (theme.value = 'dark')
    isDark.value = !isDark.value
}
</script>
