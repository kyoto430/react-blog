import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <h2>Вход</h2>
        <div className="m-2">
          <input
            type="text"
            className="form-control"
            placeholder="Логин"
            aria-label="Username"
          />
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Пароль"
            aria-label="Passwrod"
          />
        </div>
        <div className="m-3">
          <Link to="login/controlAdmin" className="button">
            Войти
          </Link>
        </div>
        <div className="m-1">
          <Link to="/registration" className="link">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
