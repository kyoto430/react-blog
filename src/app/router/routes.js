import AddAdminPage from '../pages/addAdminPage'
import ControlAdminPage from '../pages/controlAdminPage'
import LoginPage from '../pages/loginPage'
import MainPage from '../pages/mainPage'
import RegistrationPage from '../pages/registrationPage'

export const routes = [
  { path: '/controlAdmin/addAdmin', component: AddAdminPage, exact: true },
  { path: '/login/controlAdmin', component: ControlAdminPage, exact: true },
  { path: '/registration', component: RegistrationPage, exact: true },
  { path: '/login', component: LoginPage, exact: true },
  { path: '/:articleId?', component: MainPage, exact: true },
]
