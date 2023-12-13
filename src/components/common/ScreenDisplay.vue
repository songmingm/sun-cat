<!--
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-03 01:16:10
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-10 19:47:41
 * @Description: 🖥️ 屏幕界面
-->
<template>
    <div class="container">
        <div
            id="screen"
            class="screen">
            <div class="topbar_area">
                <div class="red" />
                <div class="yellow" />
                <div class="green" />
            </div>
            <div class="display_area">
                <slot name="display" />
            </div>
            <div class="dock">
                <slot name="dock-tool" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .screen {
        width: 70%;
        height: 82.5%;
        border-radius: 1vw;

        .topbar_area {
            height: 3.5vh;
            display: flex;
            align-items: center;
            padding-left: 1vw;
            border-top-left-radius: 1vw;
            border-top-right-radius: 1vw;

            @include useTheme {
                background-color: getVar('toobar');
            }

            @mixin topbar {
                height: 1.5vh;
                width: 1.5vh;
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
            height: 80vh;
            padding: 2.5vh 2vw 0 2vw;
            box-sizing: border-box;
            border-bottom-left-radius: 1vw;
            border-bottom-right-radius: 1vw;

            @include useTheme {
                background-color: getVar('bg');
            }
        }
        .dock {
            height: 6.5vh;
            width: 60%;
            position: relative;
            bottom: 8vh;
            margin: 0 auto;
            align-items: center;
            border-radius: 1.5vw;
            display: flex;
            justify-content: center;
            @include useTheme {
                background-color: getVar('dock');
            }
        }
    }
}
</style>
