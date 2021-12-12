export const ligues = {
  english: { id: 1, name: 'Англия' },
  spain: { id: 2, name: 'Испания' },
  italy: { id: 3, name: 'Италия' },
  germany: { id: 4, name: 'Германия' },
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(ligues)
    }, 2000)
  })

export default {
  fetchAll,
}
