import React, { useState } from 'react'
import { paginate } from '../utils/methods'
import { useParams } from 'react-router'
import ArticlesList from '../components/articlesList'
import SingleArticlePage from './singleArticlePage'
import Loader from '../components/loader'
import Pagination from '../components/pagination'

const MainPage = ({ articles }) => {
  const params = useParams()
  const { articleId } = params
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 4
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  if (articles) {
    const articlesCrop = paginate(articles, currentPage, pageSize)
    return articleId ? (
      <SingleArticlePage articles={articles} id={articleId} />
    ) : (
      <>
        <ArticlesList articlesCrop={articlesCrop} />
        <Pagination
          articlesCount={articles.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </>
    )
  }
  return <Loader />
}

export default MainPage
