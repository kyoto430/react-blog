import React from 'react'
import { Link } from 'react-router-dom'

const Article = ({ articlesCrop }) => {
  return (
    <div className="article-group">
      {articlesCrop.map((newArray) =>
        newArray.map((article) => (
          <div key={article.id} className="article">
            <div className="article-body">
              <h5 className="article-title text-center">{article.title}</h5>
              <p className="article-text">{article.shortText}</p>
              <Link to={`/${article.id}`} className="button">
                Открыть
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Article
