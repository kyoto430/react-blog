export const articles = [
  {
    id: 1,
    title: 'Заголовок 1',
    shortText: 'Короткий текст 1',
    fullText: 'Полный текст 1',
  },
  {
    id: 2,
    title: 'Заголовок 2',
    shortText: 'Короткий текст 2',
    fullText: 'Полный текст 2',
  },
  {
    id: 3,
    title: 'Заголовок 3',
    shortText: 'Короткий текст 3',
    fullText: 'Полный текст 3',
  },
  {
    id: 4,
    title: 'Заголовок 4',
    shortText: 'Короткий текст 4',
    fullText: 'Полный текст 4',
  },
  {
    id: 5,
    title: 'Заголовок 5',
    shortText: 'Короткий текст 5',
    fullText: 'Полный текст 5',
  },
  {
    id: 6,
    title: 'Заголовок 6',
    shortText: 'Короткий текст 6',
    fullText: 'Полный текст 6',
  },
]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(articles)
    }, 2000)
  })

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(articles.find((article) => article.id.toString() === id))
    }, 1000)
  })

export default {
  fetchAll,
  getById,
}
