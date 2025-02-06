export const localStorageUtil = {
    get<T>(key: string): T | null {
        const data = window.localStorage.getItem(key)
        return data ? JSON.parse(data) : null
    },
    set<T>(key: string, value: T): void {
        window.localStorage.setItem(key, JSON.stringify(value))
    },
    remove(key: string): void {
        window.localStorage.removeItem(key)
    },
}
