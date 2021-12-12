import React, { useEffect, useState } from 'react'
import { paginate } from '../utils/methods'
import { useParams } from 'react-router'
import ArticlesList from '../components/articlesList'
import SingleArticlePage from './singleArticlePage'
import Loader from '../components/loader'
import Pagination from '../components/pagination'
import GroupList from '../components/groupList'
import API from '../api'

const MainPage = ({ articles }) => {
  const params = useParams()
  const { articleId } = params
  const [currentPage, setCurrentPage] = useState(1)
  const [ligues, setLigues] = useState()
  const pageSize = 4
  useEffect(() => {
    API.ligues.fetchAll().then((data) => setLigues(data))
  }, [])
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const handleLigueSelect = (params) => {
    console.log(params)
  }

  if (articles) {
    const articlesCrop = paginate(articles, currentPage, pageSize)
    return articleId ? (
      <SingleArticlePage articles={articles} id={articleId} />
    ) : (
      <>
        {ligues && (
          <GroupList
            items={ligues}
            onItemSelect={handleLigueSelect}
            valueProperty={'id'}
            contentProperty={'name'}
          />
        )}
        <ArticlesList
          articlesCrop={articlesCrop}
          articlesCount={articles.length}
        />
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
