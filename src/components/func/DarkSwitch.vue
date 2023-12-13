<!--
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-11-12 17:51:07
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-10 21:55:36
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
// import { notify } from '@/utils/notify'
import { ElNotification } from 'element-plus'
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
    ElNotification({
        title: 'Prompt',
        message: 'This is a message that does not automatically close',
        duration: 0,
        appendTo: document.getElementById('screen') as HTMLElement
    })
    console.log(document.getElementById('screen'))
}
</script>
