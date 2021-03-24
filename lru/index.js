const LRUCache = require('./lru-cache')
const LRUCacheMap = require('./lru-cache-map')

const cache = new LRUCache(2)
const cacheMap = new LRUCacheMap(2)

cache.put(1, 1)
cache.put(2, 2)
console.log('# 1', cache.get(1)) // 1
cache.put(3, 3)
console.log('# -1', cache.get(2)) // -1
cache.put(4, 4)
console.log('# -1', cache.get(1)) // -1
console.log('# 3', cache.get(3)) // 3
console.log('# 4', cache.get(4)) // 4
console.log('# 3', cache.get(3)) // 3

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
