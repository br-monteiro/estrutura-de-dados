const Node = require('./node')

class LRUCache {
  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error('The capacity must be a positive integer more than zero')
    }

    this.capacity = capacity
    this.size = 0
    /**
     * @type { Node }
     */
    this.head = null
    /**
     * @type { Node }
     */
    this.tail = null
    this.map = {}
  }

  get(key) {
    /**
     * @type { Node }
     */
    const result = this.map[key]

    if (!result) return -1

    if (result === this.tail) {
      const tailPrev = this.tail.prev
      this.tail = tailPrev || null
    }

    if (result === this.head) {
      return result.data
    }

    const oldHead = this.head

    this._bindNeighbor(result)

    // trocando o valor destacado com a head
    this.head = result // atualiza head
    this.head.next = oldHead // seta a referência para o próximo node
    this.head.prev = null // limpa a referência para o node anterior
    oldHead.prev = this.head // aponta para o novo head

    return result.data
  }

  put(key, data) {
    if (key === undefined || data === undefined) return

    /**
    * @type { Node }
    */
    const result = this._bindNeighbor(this.map[key])
    const oldHead = this.head

    if (result) {
      if (result === this.tail) {
        this.tail.prev.next = null // update tail reference
      }

      result.prev = null // limpa a referência para o node anterior
      result.next = oldHead // seta a referência para o próximo node
      oldHead.prev = result // seta a referência para o node anterior
      this.head = result // atualiza head

      this.head.data = data
    } else {
      if (this._isFull()) {
        const keyOfTail = this.tail && this.tail.key
        const tailPrev = this.tail && this.tail.prev

        this.tail = tailPrev || null
        if (this.tail) this.tail.next = null

        if (keyOfTail) delete this.map[keyOfTail]
      }

      const node = new Node(data, key)

      node.next = oldHead
      if (oldHead) oldHead.prev = node

      this.head = node
      this.map[key] = node

      this._updateSize()

      if (this.size === 1) {
        this.tail = this.head
      }
    }
  }

  /**
   * Bind the neighbor of node
   * @param { Node } node - The reference node
   * @return { Node }
   */
  _bindNeighbor(node) {
    if (!node) return node

    const nodePrev = node.prev
    const nodeNext = node.next

    if (nodePrev) nodePrev.next = nodeNext
    if (nodeNext) nodeNext.prev = nodePrev

    return node
  }

  /**
   *
   * @returns { boolean }
   */
  _isFull() {
    return this.size + 1 > this.capacity
  }

  /**
   * Update the size of cache according the capacity
   * @returns { number }
   */
  _updateSize() {
    this.size = this._isFull() ? this.size : this.size + 1
    return this.size
  }
}

module.exports = LRUCache
