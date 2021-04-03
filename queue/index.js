const Queue = require('./queue')

const queue = new Queue()

console.log('#size 0:', queue.size)
console.log('null', queue.peek())

queue.push(1)
queue.push(2)
queue.push(4)

console.log('#size 3:', queue.size)
console.log('1', queue.peek())
console.log('1', queue.pop())
console.log('#size 2:', queue.size)
console.log('2', queue.peek())
console.log('2', queue.pop())
console.log('#size 1:', queue.size)
console.log('4', queue.peek())
console.log('4', queue.pop())
console.log('#size 0:', queue.size)
console.log('null', queue.peek())
console.log('null', queue.pop())

queue.push(true)
console.log('true', queue.peek())
console.log('#size 1:', queue.size)
