class Node {
  constructor(data) {
    this.data = data

    /**
     * @type { Node }
     */
    this.prev = null
    /**
     * @type { Node }
     */
    this.next = null
  }
}

module.exports = Node
