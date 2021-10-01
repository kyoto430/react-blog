import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navigation">
      <Link className="navigation-link" to="/">
        Главная
      </Link>
      <Link className="navigation-link" to="/login">
        Вход/Регистрация
      </Link>
    </nav>
  )
}

export default NavBar
