export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize
  console.log('items', items)
  console.log('start', startIndex)
  let sliceItems = []
  items.map((item) => {
    if (!items.includes(item)) {
    } else {
      sliceItems.push([item])
    }
    return sliceItems
  })
  return sliceItems.slice(startIndex, pageSize * pageNumber)
}

export function pagesArray(pageCount) {
  const arrayPages = []
  for (let i = 1; i < pageCount + 1; i += 1) {
    arrayPages.push(i)
  }
  console.log('array', arrayPages)
  return arrayPages
}
