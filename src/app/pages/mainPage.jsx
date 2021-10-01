import React from 'react'
import { useParams } from 'react-router'
import ArticlesList from '../components/articlesList'
import SingleArticlePage from './singleArticlePage'
import Loader from '../components/loader'

const MainPage = ({ articles }) => {
  const params = useParams()
  const { articleId } = params

  if (articles) {
    return articleId ? (
      <SingleArticlePage articles={articles} id={articleId} />
    ) : (
      <ArticlesList articles={articles} />
    )
  }
  return <Loader />
}

export default MainPage
