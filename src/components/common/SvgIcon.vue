<!--
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-11-12 19:29:15
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-11-13 22:00:30
 * @Description: Svg 图标组件
-->
<template>
    <svg
        aria-hidden="true"
        :width="size"
        :height="size">
        <use :href="symbolId" />
    </svg>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
    prefix: {
        type: String,
        default: 'icon'
    },
    icon: {
        type: String,
        required: true
    },
    size: {
        type: String,
        default: '50px'
    }
})
const symbolId = computed(() => `#${props.prefix}-${props.icon}`)
</script>
