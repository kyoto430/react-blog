import React from 'react'
import NavBar from './components/navBar'
import AddAdminPage from './pages/addAdminPage'
import ControlAdminPage from './pages/controlAdminPage'
import LoginPage from './pages/loginPage'
import MainPage from './pages/mainPage'
import RegistrationPage from './pages/registrationPage'
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import API from './api/index'

function App() {
  const [articles, setArticles] = useState()
  useEffect(() => {
    console.log('send request articles')
    API.articles.fetchAll().then((data) => {
      setArticles(data)
    })
  }, [])
  const handleDelete = (id) => {
    console.log('handleDelete', id)
    setArticles(articles.filter((article) => article.id !== id))
  }
  const addArticle = (title, shortText, fullText) => {
    setArticles(
      articles.concat([
        {
          id: articles.length + 1,
          title,
          shortText,
          fullText,
        },
      ])
    )
  }
  console.log(articles)
  return (
    <>
      <NavBar />
      <div className="container">
        <Switch>
          <Route
            path="/controlAdmin/addAdmin"
            exact
            render={(props) => (
              <AddAdminPage onCreate={addArticle} {...props} />
            )}
          />
          <Route
            path="/login/controlAdmin"
            render={(props) => (
              <ControlAdminPage
                articles={articles}
                onDelete={handleDelete}
                {...props}
              />
            )}
          />
          <Route path="/registration" component={RegistrationPage} />
          <Route path="/login" component={LoginPage} />
          <Route
            path="/:articleId?"
            render={(props) => <MainPage articles={articles} {...props} />}
          />
        </Switch>
      </div>
    </>
  )
}

export default App
