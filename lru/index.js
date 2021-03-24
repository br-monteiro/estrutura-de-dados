const LRUCache = require('./lru-cache')

const cache = new LRUCache(2)

cache.setCache(1, 1)
cache.setCache(2, 2)
console.log('# 1', cache.getCache(1)) // 1
cache.setCache(3, 3)
console.log('# -1', cache.getCache(2)) // -1
cache.setCache(4, 4)
console.log('# -1', cache.getCache(1)) // -1
console.log('# 3', cache.getCache(3)) // 3
console.log('# 4', cache.getCache(4)) // 4
console.log('# 3', cache.getCache(3)) // 3
