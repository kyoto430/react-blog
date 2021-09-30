import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react'
import { api } from '../api/fake.api'
import ArticlesList from '../components/articlesList'
import SingleArticlePage from './singleArticlePage'

const MainPage = () => {
  const [articles, setArticles] = useState(api)
  const params = useParams()
  const { articleId } = params
  return (
    <>
      {articleId ? (
        <SingleArticlePage articles={articles} id={articleId} />
      ) : (
        <ArticlesList articles={articles} />
      )}
    </>
  )
}

export default MainPage
