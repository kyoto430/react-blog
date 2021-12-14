import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { routes } from '../router/routes'

export const ArticlesContext = React.createContext()

const AppRouter = (props) => {
  console.log(props)
  return (
    <ArticlesContext.Provider value={props}>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
        <Redirect to="/main" />
      </Switch>
    </ArticlesContext.Provider>
  )
}

export default AppRouter
