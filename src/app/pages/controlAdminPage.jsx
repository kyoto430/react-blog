import React from 'react'
import { Link } from 'react-router-dom'

const ControlAdminPage = ({ articles, onDelete }) => {
  return (
    <div className="container">
      <div className="container-control">
        {articles.length ? (
          <h1 className="position-relative">Всего статей: {articles.length}</h1>
        ) : (
          <h1>Статьи отсутствуют!</h1>
        )}
        <div className="d-flex text-center">
          <Link to="/addAdmin" className="button">
            <i className="bi bi-plus-lg"></i> Создать статью
          </Link>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center mb-2">
        {articles.map((article) => (
          <div key={article.id} className="article">
            <div className="article-control-body">
              <div className="m-2">{article.title}</div>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(article.id)}
              >
                <i className="bi bi-x-square"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ControlAdminPage
