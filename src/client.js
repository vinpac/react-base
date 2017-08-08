import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App/App'
import routes from './router/shared'
import configureStore from './redux/configureStore'
import AsyncRoute from './components/AsyncRoute/AsyncRoute'

const store = configureStore(window.APP_STATE)
function renderApp() {
  ReactDOM.render(
    <Router>
      <App
        context={{
          store,
          storeSubscription: null,
        }}
      >
        {routes.map(route => (
          <AsyncRoute
            key={route.path}
            {...route}
            store={store}
          />
        ))}
      </App>
    </Router>,
    document.getElementById('root'),
  )
}

renderApp()

if (module.hot) {
  module.hot.accept('./router/shared', () => {
    renderApp()
  })
}
