import React from 'react'
import Article from './article'
import PropTypes from 'prop-types'

const ArticlesList = ({ articlesCrop, articlesCount }) => {
  return (
    <>
      {articlesCrop.length ? (
        <div className="wrapper">
          <h2 className="pt-3 title fw-bold position-relative">
            Статьи{' '}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {articlesCount}
            </span>
          </h2>

          <Article articlesCrop={articlesCrop} />
        </div>
      ) : (
        <h1 className="text-center">Статьи отсутствуют!</h1>
      )}
    </>
  )
}

ArticlesList.propTypes = {
  articlesCrop: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  articlesCount: PropTypes.number.isRequired,
}

export default ArticlesList
