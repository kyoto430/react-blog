import React from 'react'
import { Link } from 'react-router-dom'

const Article = ({ articles }) => {
  return (
    <div className="card-group">
      {articles.map((article) => (
        <div key={article.id} className="card w-50">
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.shortText}</p>
            <Link to={`/${article.id}`} className="btn btn-primary">
              Открыть
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Article
