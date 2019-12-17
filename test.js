const regex = /.([0-9])./
const list = [
  { name: 'a1c' },
  { name: 'b3c' },
  { name: 'c2c' },
  { name: 'd4c' },
  { name: 'b5c' }
]
console.log('unordered', list)


list.sort((itemA, itemB) => {
  const [[, numberA], [, numberB]] = [itemA, itemB].map(item => regex.exec(item.name))
  if (numberA > numberB) {
    return -1
  }
  if (numberA < numberB) {
    return 1
  }
  return 0
})
console.log('native js', list)


const { orderAsc, orderDesc, withRegex, byAttribute } = require('./')

list.sort(
  orderDesc(
    withRegex(regex,
      byAttribute('name')
    )
  )
)
console.log('custom', list)


const _ = require('lodash')

_.orderBy(list, item => regex.exec(item.name)[1], 'desc')

console.log('lodash', list)
