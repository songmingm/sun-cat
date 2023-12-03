<!--
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-03 01:16:10
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-03 20:31:04
 * @Description: 🖥️屏幕界面
-->
<template>
    <div class="container">
        <div class="screen">
            <div class="topbar_area">
                <div class="red" />
                <div class="yellow" />
                <div class="green" />
            </div>
            <div class="display_area">
                <slot name="display" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    transition: transform 0.5s;
    box-sizing: border-box;
    .screen {
        width: 80vw;
        height: 80vh;
        background-color: $bg-gray;
        border-bottom-left-radius: 1vh;
        border-bottom-right-radius: 1vh;
        .topbar_area {
            height: 2.5vh;
            display: flex;
            align-items: center;
            padding-left: 1vh;
            background-color: #ffffff;
            @mixin topbar {
                height: 1.2vh;
                width: 1.2vh;
                border-radius: 50%;
                margin: 0.2vw;
                float: left;
            }
            .green {
                background-color: #60d060;
                @include topbar;
            }
            .yellow {
                background-color: #e6c015;
                @include topbar;
            }
            .red {
                background-color: #ff0054;
                @include topbar;
            }
        }
        .display_area {
            padding: 3vh 2vw;
            height: 100%;
        }
    }
}
</style>
