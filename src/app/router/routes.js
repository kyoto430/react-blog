import AddAdminPage from '../pages/addAdminPage'
import ControlAdminPage from '../pages/controlAdminPage'
import LoginPage from '../pages/loginPage'
import MainPage from '../pages/mainPage'
import RegistrationPage from '../pages/registrationPage'

export const routes = [
  { path: '/addAdmin', component: AddAdminPage, exact: true },
  { path: '/controlAdmin', component: ControlAdminPage, exact: true },
  { path: '/registration', component: RegistrationPage, exact: true },
  { path: '/login', component: LoginPage, exact: true },
  { path: '/main/:articleId?', component: MainPage, exact: true },
]
