class LRUCache {
  /**
   * @param { number } capacity
   */
  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error('The capacity must be a positive integer more than zero')
    }

    this.capacity = capacity
    this.size = 0
    this.isFull = false
    this.queue = []
    this.cache = {}
  }

  /**
   * Returns the valur from cache. Otherwise returns -1
   * @param { * } key - The key of cached value
   * @returns { number | * }
   */
  getCache(key) {
    const result = this.cache[key]

    if (result) {
      this._popQueue()
      this._unshiftQueue(key)
      return result
    }

    return -1;
  }

  /**
   * Insert a value into cache
   * @param { * } key - The key of value
   * @param { * } value - The value to be cached
   */
  setCache(key, value) {
    if (!this.isFull) {
      this.cache[key] = value
      this.isFull = this.size + 1 >= this.capacity
      this.size += 1
    } else {
      const index = this._popQueue()
      if (index) delete this.cache[index]
      this.cache[key] = value
    }

    this._unshiftQueue(key)
  }

  _popQueue() {
    if (this.queue.length === 1 && this.capacity !== 1) {
      return Object.keys(this.cache).find(i => i != this.queue[0])
    }

    return this.queue.pop()
  }

  _unshiftQueue(key) {
    if (key !== this.queue[0]) this.queue.unshift(key)
  }
}

module.exports = LRUCache