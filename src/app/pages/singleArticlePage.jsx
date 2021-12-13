import React from 'react'
import Loader from '../components/loader'
import { useHistory } from 'react-router'

const SingleArticlePage = ({ articles, id }) => {
  const history = useHistory()
  const handleBack = (event) => {
    event.preventDefault()
    history.replace('/main')
  }
  const getArticleById = (id) => {
    return articles.find((article) => article.id.toString() === id)
  }
  const articleById = getArticleById(id)
  if (!articleById?.title) {
    return <Loader />
  }

  return (
    <div>
      <div className="wrapper">
        <div className="article-body-full clearfix">
          <img
            className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid"
            src={articleById.image}
            alt={articleById.title}
          />
          <p className="article-title fw-bold">{articleById.title}</p>
          <p className="article-text text">{articleById.fullText}</p>
        </div>
        <button onClick={handleBack} className="btn btn-sm btn-secondary">
          Назад
        </button>
      </div>
    </div>
  )
}

export default SingleArticlePage
