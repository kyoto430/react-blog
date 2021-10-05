import React from 'react'

const RegistrationPage = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="mt-2">Регистрация</h3>
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
        <button className="button m-2">Зарегистрироваться</button>
      </div>
    </div>
  )
}

export default RegistrationPage
