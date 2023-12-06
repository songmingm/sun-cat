/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-03 22:25:07
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2023-12-05 21:44:15
 * @Description: 🔧storage工具类
 */
function createStorageUtil(storage: Storage) {
    function get<T>(key: string): T | null {
        const value = storage.getItem(key)
        try {
            return value ? JSON.parse(value) : null
        } catch (err) {
            return null
        }
    }

    function set<T>(key: string, value: T): void {
        if (typeof value === 'object') {
            storage.setItem(key, JSON.stringify(value))
        } else {
            storage.setItem(key, value as any)
        }
    }

    function remove(key: string): void {
        storage.removeItem(key)
    }

    function clear(): void {
        storage.clear()
    }

    return { get, set, remove, clear }
}

export const localStorageUtil = createStorageUtil(localStorage)
export const sessionStorageUtil = createStorageUtil(sessionStorage)
