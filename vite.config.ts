/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-11-13 21:22:26
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-02 21:35:00
 * @Description: vite 配置
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
    plugins: [
        vue(),
        eslintPlugin({
            include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue']
        }),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icon')],
            symbolId: 'icon-[dir]-[name]'
        }),
        AutoImport({
            resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
        }),
        Components({
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass'
                })
            ]
        })
    ],
    resolve: {
        alias: {
            /* 配置路径别名 */
            '@': path.resolve(__dirname, './src')
        }
    },
    /* 全局自定义主题颜色样式 */
    css: {
        preprocessorOptions: {
            scss: {
                // eslint-disable-next-line prettier/prettier, quotes
                additionalData:
                    `@use "@/assets/style/_colors" as *;
                     @use "@/assets/style/element" as *;
                     `
            }
        }
    },
    server: {
        port: 3000, // 运行端口
        hmr: true // 热更新
    }
})
