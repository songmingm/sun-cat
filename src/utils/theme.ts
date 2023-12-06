/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-05 21:41:25
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-06 21:19:03
 * @Description: 🌛 跟随系统切换颜色
 */
import { ref, watchEffect } from 'vue'
import { localStorageUtil } from './storage'

type Theme = 'os' | 'light' | 'dark'

const LOCAL_KEY = '__theme__'

/**
 * 从本地存储中读取主题
 * 未读取默认使用 'os'
 */
const theme = ref<Theme>((localStorageUtil.get(LOCAL_KEY) as Theme) || 'os')

/**
 * 匹配系统的主题样式是否为'dark'
 */
const prefers = matchMedia('(prefers-color-scheme: dark')

function followOS() {
    document.documentElement.dataset.theme = prefers.matches ? 'dark' : 'light'
}

watchEffect(() => {
    localStorageUtil.set(LOCAL_KEY, theme.value)
    if (theme.value === 'os') {
        followOS()
        prefers.addEventListener('change', followOS)
    } else {
        document.documentElement.dataset.theme = theme.value
        prefers.removeEventListener('change', followOS)
    }
})

export default function useTheme() {
    return {
        theme
    }
}
