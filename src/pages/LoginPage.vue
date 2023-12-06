import ScreenDisplay from '@/components/common/ScreenDisplay.vue';
<!--
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-11-12 14:44:48
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-03 21:32:28
 * @Description: 登陆页面
-->
<template>
    <div style="height: 100%; background-color: rebeccapurple">
        <DarkSwitch />
        <el-button type="primary">primary</el-button>
        <el-button type="danger">danger</el-button>
        <el-button type="success">success</el-button>
        <el-button type="warning">warning</el-button>
        <el-button type="info">info</el-button>
    </div>
</template>
<script setup lang="ts">
import DarkSwitch from '@/components/func/DarkSwitch.vue'
</script>
<style lang="scss" scoped></style>
