/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-11-13 21:32:00
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-10 15:16:01
 * @Description: eslint 配置文件
 */
module.exports = {
    printWidth: 80, // 一行最多多少个字符
    tabWidth: 4, // 指定每个缩进级别的空格数
    useTabs: false, // 使用制表符而不是空格缩进行
    semi: false, // 在语句末尾是否需要分号
    singleQuote: true, // 是否使用单引号
    trailingComma: 'none', // 多行时尽可能打印尾随逗号
    bracketSpacing: true, // 在对象文本中打印括号之间的空格
    bracketSameLine: true, // 将多行 HTML（HTML、JSX、VUE、Angular）元素放在最后一行的末尾，而不是单独放在下一行
    vueIndentScriptAndStyle: false, // 缩进Vue文件脚本和样式标签
    singleAttributePerLine: true, // 每行单个属性
    htmlWhitespaceSensitivity: 'ignore'
}
