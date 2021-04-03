const Node = require('./node')

class LinkedList {
  constructor() {
    /**
     * @type { Node }
     */
    this.head = null
    /**
     * @type { Node }
     */
    this.tail = null
    this.size = 0
  }

  append(data) {
    const node = new Node(data)
    let pointer = this.head

    if (pointer) {
      while (pointer.next) {
        pointer = pointer.next
      }
      pointer.next = node
    } else {
      this.head = node
    }

    this.size += 1
  }

  get(index) {
    let pointer = this.head

    if (index === 0 && pointer) return pointer.data

    for (let i = 0; i < index; i++) {
      if (pointer) {
        pointer = pointer.next
      } else {
        return null
      }
    }

    return pointer ? pointer.data : null
  }

  index(data) {
    let i = 0
    let pointer = this.head
    const comparator = typeof data === 'function' ? data : (p) => p.data === data

    while (pointer) {
      if (comparator(pointer.data)) {
        return i
      }
      pointer = pointer.next
      i += 1
    }

    return -1
  }
}

module.exports = LinkedList
