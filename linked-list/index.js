const LinkedList = require('./linked-list')

const list = new LinkedList()

list.append('b')
list.append('a')
list.append('c')
list.append({i: 1})

console.log('size:', list.size)

console.log(list.get(1))
console.log(list.get(2))
console.log(list.get(0))
console.log(list.get(5))

console.log('-----')
console.log(list.index('c'))
console.log(list.index('b'))
console.log(list.index('x'))
console.log(list.index(d => d.i === 1))
console.log(list.index(d => d.i === 3))

