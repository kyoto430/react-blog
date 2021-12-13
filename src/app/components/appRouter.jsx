import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { routes } from '../router/routes'

export const Context = React.createContext()

const AppRouter = (props) => {
  console.log(props.articles)
  return (
    <Context.Provider value={props}>
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
    </Context.Provider>
  )
}

export default AppRouter
