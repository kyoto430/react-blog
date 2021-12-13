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
  const [selectedLigue, setSelectedLigue] = useState()
  const pageSize = 4
  useEffect(() => {
    API.ligues.fetchAll().then((data) => setLigues(data))
  }, [])
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedLigue])
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const handleLigueSelect = (item) => {
    setSelectedLigue(item)
  }
  const clearFilter = () => {
    setSelectedLigue()
  }

  if (articles) {
    const filteredArticles = selectedLigue
      ? articles.filter((article) => article.ligue === selectedLigue)
      : articles
    const count = filteredArticles.length
    const articlesCrop = paginate(filteredArticles, currentPage, pageSize)
    return articleId ? (
      <SingleArticlePage articles={articles} id={articleId} />
    ) : (
      <div className="d-flex mt-3 flexColumn">
        {ligues ? (
          <div className="d-flex flex-shrink-0 flex-column">
            <GroupList
              items={ligues}
              onItemSelect={handleLigueSelect}
              selectedItem={selectedLigue}
            />
            <button className="btn btn-secondary mt-2" onClick={clearFilter}>
              Очистить
            </button>
          </div>
        ) : (
          <Loader />
        )}
        <div className="d-flex justify-content-center flex-column container">
          <ArticlesList articlesCrop={articlesCrop} articlesCount={count} />
          <div className="d-flex justify-content-center">
            <Pagination
              articlesCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    )
  }
  return <Loader />
}

export default MainPage
