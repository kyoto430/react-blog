import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="nav justify-content-end">
      <Link className="nav-link" to="/">
        Статьи
      </Link>
      <Link className="nav-link" to="/login">
        Вход/Регистрация
      </Link>
    </nav>
  )
}

export default NavBar
