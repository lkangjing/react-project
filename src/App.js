import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRoutes } from './routers/index'
import Frame from './components/Frame/Index.jsx'
import { isLogined } from './utils/auth'
import 'antd/dist/antd.css'
import './App.css'

function App() {
  return isLogined() ? (
    <Frame className="App">
      <h1>Frame组件</h1>
      <Switch>
        {adminRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={(routeProps) => {
                return <route.component {...routeProps} />
              }}
            />
          )
        })}
        <Redirect to={adminRoutes[0].path} from="/admin" />
        <Redirect to="/404" />
      </Switch>
    </Frame>
  ) : (
    <Redirect to="/login" />
  )
}

export default App
