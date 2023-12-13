<!--
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-11-13 21:22:26
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-10 18:46:27
 * @Description: App 根组件
-->
<template>
    <ScreenDisplay>
        <template #display>
            <RouterView />
        </template>
        <template #dock-tool>
            <ToolsApp />
        </template>
    </ScreenDisplay>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import ScreenDisplay from '@/components/common/ScreenDisplay.vue'
import ToolsApp from '@/components/func/ToolsApp.vue'
</script>
