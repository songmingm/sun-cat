/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-10 19:27:51
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-10 19:42:06
 * @Description: 📢 通知工具
 */
import { ElNotification } from 'element-plus'
export function notify(message: string): void {
    ElNotification({
        title: '系统通知',
        message: message,
        appendTo: document.getElementById('#screen') as HTMLElement
    })
}
