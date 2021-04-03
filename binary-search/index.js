const { binarySearch } = require('./binary-search')

const list = [1, 2, 3, 4, 5, 6, 7, 7, 8]
const complexList = [
  {
    key: 1,
    value: 'a',
    other: [1, 2]
  },
  {
    key: 2,
    value: 'b',
    other: [3, 9]
  },
  {
    key: 3,
    value: 'c',
    other: [11, -2]
  },
]

console.time('#case1')
console.log(binarySearch())
console.timeEnd('#case1')

console.time('#case2')
console.log(binarySearch(list, 4))
console.timeEnd('#case2')

console.time('#case3')
console.log(binarySearch(list, 7))
console.timeEnd('#case3')

console.time('#case4')
console.log(binarySearch(list, 111))
console.timeEnd('#case4')

console.time('#case5')
console.log(binarySearch(complexList, item => 3 - item.key))
console.timeEnd('#case5')

console.time('#case6')
console.log(binarySearch(complexList, item => {
  if (item.value === 'b') return 0

  return item.value < 'b' ? -1 : 1
}))
console.timeEnd('#case6')

console.time('#case7')
console.log(binarySearch(complexList, item => {
  if (item.value === 'x') return 0

  return item.value < 'x' ? -1 : 1
}))
console.timeEnd('#case7')

console.time('#case8')
console.log(binarySearch(complexList, item => {
  return 1 - item.other[0]
}))
console.timeEnd('#case8')
