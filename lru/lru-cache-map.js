class LRUcache {
  /**
   * @param { number } capacity
   */
  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error('The capacity must be a positive integer more than zero')
    }

    this.capacity = capacity
    this.cache = new Map()
  }

  /**
   * Returns the valur from cache. Otherwise returns -1
   * @param { * } key - The key of cached value
   * @returns { number | * }
   */
  get(key) {
    const value = this.cache.get(key)

    if (value === undefined) return -1

    this.cache.delete(key)
    this.put(key, value)

    return value
  }

  /**
   * Insert a value into cache
   * @param { * } key - The key of value
   * @param { * } value - The value to be cached
   */
  put(key, value) {
    if (key === undefined || value === undefined) return

    if (this.cache.get(key) !== undefined) {
      this.cache.delete(key)
    }

    if ((this.cache.size + 1) > this.capacity) {
      this.cache.delete(this.cache.keys().next().value)
    }

    this.cache.set(key, value)
  }
}

module.exports = LRUcache
