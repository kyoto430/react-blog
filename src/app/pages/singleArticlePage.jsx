import React from 'react'
import Loader from '../components/loader'
import { useHistory } from 'react-router'

const SingleArticlePage = ({ articles, id }) => {
  const history = useHistory()
  const handleBack = (event) => {
    event.preventDefault()
    history.replace('/')
  }
  const getArticleById = (id) => {
    return articles.find((article) => article.id.toString() === id)
  }
  const articleById = getArticleById(id)
  if (!articleById?.title) {
    return <Loader />
  }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="article-body-full">
          <h5 className="article-title">{articleById.title}</h5>
          <p className="article-text">{articleById.fullText}</p>
        </div>
        <button onClick={handleBack} className="btn btn-sm btn-secondary m-2">
          Назад
        </button>
      </div>
    </div>
  )
}

export default SingleArticlePage
