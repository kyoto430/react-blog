import React from 'react'

const RegistrationPage = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="w-50 d-flex flex-column align-items-center">
        <h3>Регистрация</h3>
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
        <button>Зарегистрироваться</button>
      </div>
    </div>
  )
}

export default RegistrationPage
