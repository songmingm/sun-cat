<!--
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-13 20:30:14
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-13 20:40:30
 * @Description: 测试弹窗
-->
<template>
    <el-dialog v-model="isShow">
        弹窗
        <el-button @click="closeDialog">取消</el-button>
    </el-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref<boolean>(false)
const openDialog = () => {
    isShow.value = true
}
const closeDialog = () => {
    isShow.value = false
}
defineExpose({
    openDialog,
    closeDialog
})
</script>
