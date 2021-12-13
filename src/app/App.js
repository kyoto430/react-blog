import React from 'react'
import NavBar from './components/navBar'
import AddAdminPage from './pages/addAdminPage'
import ControlAdminPage from './pages/controlAdminPage'
import LoginPage from './pages/loginPage'
import MainPage from './pages/mainPage'
import RegistrationPage from './pages/registrationPage'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import API from './api/index'
import { validator } from './utils/validator'

function App() {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }
  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения',
      },
      isEmail: {
        message: 'Email введен некорректно',
      },
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения',
      },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву',
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одну цифру',
      },
      min: {
        message: 'Пароль должен состоять минимум из 8 символов',
        value: 8,
      },
    },
  }
  useEffect(() => {
    validate()
  }, [data])
  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const isValid = Object.keys(errors).length === 0
  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
  }

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
  const addArticle = (title, shortText, fullText, image) => {
    setArticles(
      articles.concat([
        {
          id: articles.length + 1,
          title,
          shortText,
          fullText,
          image,
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
            path="/addAdmin"
            exact
            render={(props) => (
              <AddAdminPage onCreate={addArticle} {...props} />
            )}
          />
          <Route
            path="/controlAdmin"
            render={(props) => (
              <ControlAdminPage
                articles={articles}
                onDelete={handleDelete}
                {...props}
              />
            )}
          />
          <Route
            path="/registration"
            render={(props) => (
              <RegistrationPage
                onChange={handleChange}
                onSubmit={handleSubmit}
                data={data}
                errors={errors}
                isValid={isValid}
                {...props}
              />
            )}
          />
          <Route
            path="/login"
            render={(props) => (
              <LoginPage
                onChange={handleChange}
                onSubmit={handleSubmit}
                data={data}
                errors={errors}
                isValid={isValid}
                {...props}
              />
            )}
          />
          <Route
            path="/main/:articleId?"
            render={(props) => <MainPage articles={articles} {...props} />}
          />
          <Redirect to="/main" />
        </Switch>
      </div>
    </>
  )
}

export default App
