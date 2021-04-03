const Node = require('./node')

class Queue {
  constructor() {
    /**
     * @type { Node }
     */
    this.first = null

    /**
     * @type { Node }
     */
    this.last = null

    /**
     * @type { Number }
     */
    this.size = 0
  }

  /**
   * Insert a value on top of queue
   * @param { * } data
   */
  push(data) {
    const node = new Node(data)

    if (!this.first && !this.last) {
      this.first = node
      this.last = node
    }

    this.last.next = node
    this.last = node
    this.size += 1
  }

  /**
   * Remove the value from the top os queue
   * @returns { * }
   */
  pop() {
    if (!this.first) return null

    const oldFirst = this.first

    this.first = oldFirst.next
    this.size -= 1

    if (this.size === 0) this.last = null

    return oldFirst.data
  }

  peek() {
    if (this.size === 0) return null

    return this.first.data
  }
}

module.exports = Queue
