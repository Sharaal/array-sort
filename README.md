Just a draft how an array can be sort.

Why I think about that? It always feels annoying try out which variant of returning 1/-1/0 is needed to have asc/desc ordering.

## Requirements

Sort an array of items having a name by a number in this name.

Simple regex to extract the number:

```javascript
const regex = /.([0-9])./
```

Example list of items:

```javascript
const list = [
  { name: 'a1c' },
  { name: 'b3c' },
  { name: 'c2c' },
  { name: 'd4c' },
  { name: 'b5c' }
]
```

## Solutions

Native JS:

```javascript
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
```

Custom solution with helper functions:
```javascript
const { orderAsc, orderDesc, withRegex, byAttribute } = require('./')

list.sort(
  orderDesc(
    withRegex(regex,
      byAttribute('name')
    )
  )
)
```

Alternatively also possible with lodash:
```javascript
const _ = require('lodash')

_.orderBy(list, item => regex.exec(item.name)[1], 'desc')
```
