import React from 'react'
import Article from './article'

const ArticlesList = ({ articlesCrop }) => {
  return (
    <>
      {articlesCrop.length ? (
        <div className="wrapper">
          <h1 className="title">Статьи</h1>

          <Article articlesCrop={articlesCrop} />
        </div>
      ) : (
        <h1 className="text-center">Статьи отсутствуют!</h1>
      )}
    </>
  )
}

export default ArticlesList
