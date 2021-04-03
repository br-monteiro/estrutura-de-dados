const Node = require('./node')

class Stack {
    constructor() {
        /**
         * @type { Node }
         */
        this.top = null

        /**
         * @type { Number }
         */
        this.size = 0
    }

    /**
     * Insert a value on top of stack
     * @param { * } data
     */
    push(data) {
        const node = new Node(data)
        node.next = this.top

        this.top = node
        this.size += 1
    }

    /**
     * Remove the value from the top os stack
     * @returns { * }
     */
    pop() {
        if (!this.top) return null

        const top = this.top

        this.top = top.next
        this.size -= 1

        return top.data
    }

    peek() {
        if (!this.top) return null

        return this.top.data
    }
}

module.exports = Stack
