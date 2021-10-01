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
      <div className="wrapper">
        <div className="article-body-full">
          <h5 className="article-title">{articleById.title}</h5>
          <p className="article-text">{articleById.fullText}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleArticlePage
