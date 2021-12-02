import React from 'react'
import { Link } from 'react-router-dom'

const Article = ({ articlesCrop }) => {
  return (
    <div className="article-group">
      {articlesCrop.map((newArray) =>
        newArray.map((article) => (
          <div key={article.id} className="article">
            <div
              className="article-body"
              style={{
                backgroundImage: `url(${article.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <h5 className="article-title text-center fw-bolder text-shadow-2">
                {article.title}
              </h5>
              <p className="text-center fw-bold text-shadow-1 w-75">
                {article.shortText}
              </p>
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
