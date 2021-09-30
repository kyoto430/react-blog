import React from 'react'
import NavBar from './components/navBar'
import AddAdminPage from './pages/addAdminPage'
import ControlAdminPage from './pages/controlAdminPage'
import LoginPage from './pages/loginPage'
import MainPage from './pages/mainPage'
import RegistrationPage from './pages/registrationPage'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/controlAdmin/addAdmin" exact component={AddAdminPage} />
        <Route path="/login/controlAdmin" component={ControlAdminPage} />
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/:articleId?" component={MainPage} />
      </Switch>
    </>
  )
}

export default App
