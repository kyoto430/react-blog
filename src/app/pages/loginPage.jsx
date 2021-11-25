import React from 'react'
import { Link } from 'react-router-dom'
import TextField from '../components/textField'

const LoginPage = ({ onChange, onSubmit, data, errors, isValid }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4 text-center">Вход</h3>
          <form onSubmit={onSubmit}>
            <TextField
              label="Электронная почта"
              name="email"
              value={data.email}
              onChange={onChange}
              error={errors.email}
            />
            <TextField
              label="Пароль"
              type="password"
              name="password"
              value={data.password}
              onChange={onChange}
              error={errors.password}
            />
            <div className="wrapper">
              <Link to="login/controlAdmin">
                <button
                  type="submit"
                  disabled={!isValid}
                  className="btn btn-primary"
                >
                  Войти
                </button>
              </Link>
              <div className="m-1">
                <Link to="/registration" className="link">
                  Зарегистрироваться
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
