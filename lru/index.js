const LRUCache = require('./lru-cache')

const cache = new LRUCache(2)

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
