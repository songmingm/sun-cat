<!--
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-10 18:49:19
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-13 20:38:38
 * @Description: 🏠 主页
-->
<template>
    <div>
        <el-button
            type="primary"
            @click="openBtn">
            打开弹窗
        </el-button>
        <el-button
            type="warning"
            @click="closeBtn">
            关闭弹窗
        </el-button>
    </div>
    <TestDialog ref="dialogRef" />
</template>
<script setup lang="ts">
import TestDialog from '@/components/diolog/TestDialog.vue'
import { ref } from 'vue'
const dialogRef = ref<any>(null)

const openBtn = () => {
    dialogRef.value.openDialog()
}
const closeBtn = () => {
    dialogRef.value.closeDialog()
}
</script>
