/**
 * Feature detection for web storage
 * Usage: detectStorage('localStorage')
 * Returns boolean
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 */
export default function (type) {
  try {
    const storage = window[type]
    const x = '__storage_test__'
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return false
  }
}
