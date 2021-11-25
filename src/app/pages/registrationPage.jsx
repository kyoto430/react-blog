import React from 'react'
import TextField from '../components/textField'

const RegistrationPage = ({ onChange, onSubmit, data, errors, isValid }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4 text-center">Регистрация</h3>
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
            <button
              type="submit"
              disabled={!isValid}
              className="btn btn-primary mx-auto w-100"
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage
