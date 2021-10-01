import React from 'react'
import { Link } from 'react-router-dom'

const ControlAdminPage = ({ articles, onDelete }) => {
  return (
    <div className="container">
      <div className="container-control">
        {articles.length ? <h1>Статьи</h1> : <h1>Статьи отсутствуют!</h1>}
        <div>
          <Link to="/controlAdmin/addAdmin" className="button">
            Создать статью
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-start flex-wrap">
        {articles.map((article) => (
          <div key={article.id} className="article">
            <div className="article-control-body">
              <div className="m-2">{article.title}</div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(article.id)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ControlAdminPage
