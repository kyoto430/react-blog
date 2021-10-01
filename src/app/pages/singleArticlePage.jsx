import React from 'react'
import Loader from '../components/loader'

const SingleArticlePage = ({ articles, id }) => {
  const getArticleById = (id) => {
    return articles.find((article) => article.id.toString() === id)
  }
  const articleById = getArticleById(id)
  if (!articleById?.title) {
    return <Loader />
  }
  return (
    <div className="container">
      <div className="card w-100 text-center">
        <div className="card-body">
          <h5 className="card-title">{articleById.title}</h5>
          <p className="card-text">{articleById.fullText}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleArticlePage
