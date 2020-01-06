/**
 * Desc: 操作 localstorage,sessionStorage 方法
 * import storage from 'common/js/storage'
 * storage.locals.get()
 * storage.sessions.get()
 */

const cookie = {}

const locals = {
  get(key) {
    return JSON.parse(localStorage.getItem(key))
  },
  set(key, data) {
    return localStorage.setItem(key, JSON.stringify(data))
  },
  remove(key) {
    return localStorage.removeItem(key)
  },
  clearAll() {
    return localStorage.clear()
  }
}
const sessions = {
  get(key) {
    return JSON.parse(sessionStorage.getItem(key))
  },
  set(key, data) {
    return sessionStorage.setItem(key, JSON.stringify(data))
  },
  remove(key) {
    return sessionStorage.removeItem(key)
  },
  clearAll() {
    return sessionStorage.clear()
  }
}

export default {
  locals,
  sessions,
  cookie
}
