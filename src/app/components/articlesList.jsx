import React from 'react'
import Article from './article'

const ArticlesList = ({ articles }) => {
  return (
    <>
      {articles.length ? (
        <div>
          <h1>Статьи</h1>
          <Article articles={articles} />
        </div>
      ) : (
        <h1>Статьи отсутствуют!</h1>
      )}
    </>
  )
}

export default ArticlesList
