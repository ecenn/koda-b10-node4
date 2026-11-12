# Materi: JSDoc

Menggunakan JSDoc untuk dokumentasi fungsi yang dibuat.

Dokumentasi dilakukan dengan tujuan supaya developer yang melanjutkan program dapat memahami kode yang pernah dibuat sebelumnya.

## Code Snippet


```js
/**
 * 
 * @param {string[]} data - source data
 * @param {string} user - target person
 * @returns string[]
 */
function fungsiFilter(data, user) {
    return data.filter((target)=>target.toLowerCase().includes(user.toLowerCase()))
}
```
