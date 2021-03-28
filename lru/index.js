const LRUCacheWrong = require('./lru-cache.js')
const LRUCacheMap = require('./lru-cache-map')

const cacheWrong = new LRUCacheWrong(2)
const cacheMap = new LRUCacheMap(2)

cacheWrong.put(1, 1)
cacheWrong.put(2, 2)
console.log('# 1', cacheWrong.get(1)) // 1
cacheWrong.put(3, 3)
console.log('# -1', cacheWrong.get(2)) // -1
cacheWrong.put(4, 4)
console.log('# -1', cacheWrong.get(1)) // -1
console.log('# 3', cacheWrong.get(3)) // 3
console.log('# 4', cacheWrong.get(4)) // 4
console.log('# 3', cacheWrong.get(3)) // 3

console.log('----')

cacheMap.put(1, 1)
cacheMap.put(2, 2)
console.log('# 1', cacheMap.get(1)) // 1
cacheMap.put(3, 3)
console.log('# -1', cacheMap.get(2)) // -1
cacheMap.put(4, 4)
console.log('# -1', cacheMap.get(1)) // -1
console.log('# 3', cacheMap.get(3)) // 3
console.log('# 4', cacheMap.get(4)) // 4
console.log('# 3', cacheMap.get(3)) // 3
