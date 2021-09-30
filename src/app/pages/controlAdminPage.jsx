import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api/fake.api'

const ControlAdminPage = () => {
  const [articles, setArticles] = useState(api)
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between">
        <h1>Статьи</h1>
        <button>
          <Link to="/controlAdmin/addAdmin">Создать статью</Link>
        </button>
      </div>
      <div className="card-group text-center">
        {articles.map((article) => (
          <div key={article.id} className="card w-100">
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <button>Удалить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ControlAdminPage
