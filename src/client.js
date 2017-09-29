import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './components/App/App'
import routes from './router/shared'
import configureStore from './redux/configureStore'
import AsyncRoute from './components/AsyncRoute/AsyncRoute'
import { deepForceUpdate } from './core/utils/devUtils'

const store = configureStore(window.APP_STATE)

let appInstance
function renderApp() {
  if (appInstance) {
    deepForceUpdate(React)(appInstance)
    return
  }

  appInstance = ReactDOM.hydrate(
    <Router>
      <App
        context={{
          store,
          storeSubscription: null,
        }}
      >
        <Switch>
          {routes.map((route, i) => (
            <AsyncRoute
              key={i}  // eslint-disable-line
              {...route}
              store={store}
            />
          ))}
        </Switch>
      </App>
    </Router>,
    document.getElementById('root'),
  )
}

setTimeout(() => renderApp(), 200)

if (module.hot) {
  module.hot.accept('./router/shared', () => {
    renderApp()
  })
}
