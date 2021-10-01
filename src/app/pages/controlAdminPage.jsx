import React from 'react'
import { Link } from 'react-router-dom'

const ControlAdminPage = ({ articles, onDelete }) => {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between">
        {articles.length ? <h1>Статьи</h1> : <h1>Статьи отсутствуют!</h1>}
        <button>
          <Link to="/controlAdmin/addAdmin">Создать статью</Link>
        </button>
      </div>
      <div className="card-group text-center">
        {articles.map((article) => (
          <div key={article.id} className="card w-100">
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <button onClick={() => onDelete(article.id)}>Удалить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ControlAdminPage
