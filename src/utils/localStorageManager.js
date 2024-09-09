export const KEY_ACCESS_TOKEN = "access_token"

export const setItem = (key,value) => {
    localStorage.setItem(key,value)
}
export const getItem = (key) => {
    return localStorage.getItem(key)
}
export const removeItem = (key,value) => {
    localStorage.remove(key,value)
}
