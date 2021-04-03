const Stack = require('./stack')

const stack = new Stack()

console.time('#time')

stack.push(1)
stack.push(2)
stack.push(3)

console.log('#size 3:', stack.size)
console.log('#3', stack.pop())
console.log('#size 2:', stack.size)
console.log('#2', stack.peek())
console.log('#2', stack.pop())
console.log('#size 1:', stack.size)
console.log('#1', stack.peek())
console.log('#1', stack.pop())
console.log('#size 0:', stack.size)
console.log('null', stack.peek())
console.log('null', stack.pop())
console.log('#size 0:', stack.size)

console.timeEnd('#time')
