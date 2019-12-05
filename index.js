module.exports.byAttribute = attribute => item => item[attribute]

module.exports.withRegex = (regex, by = item => item) => item => {
  const [, sort] = regex.exec(by(item))
  return sort
}

module.exports.orderAsc = (by = item => item) => (itemA, itemB) => {
  const [sortA, sortB] = [itemA, itemB].map(by)
  if (sortA > sortB) {
    return 1
  }
  if (sortA < sortB) {
    return -1
  }
  return 0
}

module.exports.orderDesc = by => (itemA, itemB) => -module.exports.orderAsc(by)(itemA, itemB)
