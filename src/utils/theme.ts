/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-05 21:41:25
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-10 15:09:45
 * @Description: 🌛 跟随系统切换颜色
 */
import { Ref, ref, watchEffect } from 'vue'
import { localStorageUtil } from './storage'

export type Theme = 'os' | 'light' | 'dark'

/**
 * 本地存储中保存主题样式的key
 */
export const LOCAL_KEY: string = '__theme__'

/**
 * 从本地存储中读取主题
 * 未读取默认使用 'os'
 */
const theme = ref<Theme>((localStorageUtil.get(LOCAL_KEY) as Theme) || 'os')
/**
 * 匹配系统的主题样式是否为'dark'
 */
const prefers = window.matchMedia('(prefers-color-scheme: dark')

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

/**
 * 返回主题模式的响应式对象，通过修改这个值即可修改主题
 * @returns theme的响应式对象
 */
export function useTheme(): Ref<Theme> {
    return theme
}
