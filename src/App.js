import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRoutes } from './routers/index'
import Frame from './components/Frame/Index.jsx'
import 'antd/dist/antd.css'
import './App.css'

function App() {
  return (
    <Frame className="App">
      <h1>Frame组件</h1>
      <Switch>
        {adminRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.react}
              render={(routeProps) => {
                return <route.component {...routeProps} />
              }}
            />
          )
        })}
        <Redirect to="/404" />
      </Switch>
    </Frame>
  )
}

export default App
