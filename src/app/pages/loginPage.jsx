import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="w-50 d-flex flex-column align-items-center">
        <h3>Вход</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Логин"
            aria-label="Username"
          />
          <input
            type="password"
            className="form-control"
            placeholder="Пароль"
            aria-label="Passwrod"
          />
        </div>
        <button>
          <Link to="login/controlAdmin">Войти</Link>
        </button>
        <div>
          <Link to="/registration">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
