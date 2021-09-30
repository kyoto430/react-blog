import React from 'react'
import Loader from '../components/loader'

const SingleArticlePage = ({ articles, id }) => {
  const getArticleById = (id) => {
    return articles.find((article) => article.id.toString() === id)
  }
  const article = getArticleById(id)
  return article ? (
    <div className="card w-100 text-center">
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.fullText}</p>
      </div>
    </div>
  ) : (
    <Loader />
  )
}

export default SingleArticlePage
