/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-11-13 21:25:45
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-03 22:20:58
 * @Description: eslint 文件
 */
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        'eslint-config-prettier',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-essential',
        'plugin:prettier/recommended' // 1.继承.prettierrc.js文件规则  2.开启rules的 "prettier/prettier": "error"  3.eslint fix的同时执行prettier格式化
    ],
    parser: 'vue-eslint-parser',
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'vue'],
    rules: {
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产默认不允许使用debugger
        '@typescript-eslint/no-unused-vars': [
            'error',
            { varsIgnorePattern: '.*', args: 'none' }
        ], // 变量声明未使用
        '@typescript-eslint/no-explicit-any': 'off',
        'comma-dangle': ['error', 'never'], // 禁止使用拖尾逗号
        'line-comment-position': ['warn', 'beside'], // 注释位置
        'no-duplicate-imports': ['error', { includeExports: true }], // 禁止重复模块导入
        'no-console': 'warn', // 警告 console 打印语句
        'no-empty': 'warn', // 禁止空语句块
        'no-empty-function': 'warn', // 空函数
        'no-unused-vars': 'warn', // 开启没有用过的变量检测
        'spaced-comment': 'error',
        'no-trailing-spaces': 'error', // 行结束后面不要有空格
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 1,
                alignAttributesVertically: true, // 属性垂直对齐
                ignores: [] // 要忽略节点的选择器
            }
        ],
        'vue/no-unused-properties': [
            'warn',
            {
                groups: ['props', 'data', 'methods']
            }
        ], // 未使用的props，data，method
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['404', '500']
            }
        ], // 组件命名格式
        'vue/no-empty-component-block': 'warn', // 不允许标签块为空,
        'vue/no-spaces-around-equal-signs-in-attribute': ['error'], // 不允许属性两边有空格
        'vue/no-multi-spaces': [
            'error',
            {
                ignoreProperties: false
            }
        ], // 禁止多个空格
        'vue/mustache-interpolation-spacing': ['error', 'always'], // {{ a }}
        'vue/require-default-prop': ['off'], // props 必须设置值
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 1
                },
                multiline: {
                    max: 1
                }
            }
        ] // 单行属性个数
    } // 允许ts使用any
}
