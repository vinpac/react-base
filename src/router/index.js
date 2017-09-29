import React from 'react'
import { Router as ExpressRouter } from 'express'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router'
import { Route, Switch, matchPath } from 'react-router-dom'
import serialize from 'serialize-javascript'
import App from '../components/App/App'
import configureStore from '../redux/configureStore'
import routes from './shared'
import apiRoutes from './api'
import { resolveContext } from '../core/constants'

let apiRouter = new ExpressRouter()
apiRoutes.forEach((routeConfigurator) => {
  routeConfigurator(apiRouter)
})

export const apiMiddleware = (req, res, next) => apiRouter(req, res, next)


export async function resolve(req, res, next) {
  const context = {}

  // configure store with initial state
  const store = configureStore({
    user: req.user,
  })

  const promises = []
  if (!routes.some((route) => {
    const match = matchPath(req.url.replace('/?', '?'), route)

    if (match && route.loadData) {
      promises.push(route.loadData({
        ...match,
        query: req.query,
        store,
      }))
    }

    return match
  })) {
    // if not matched a route
    next()
    return
  }

  await Promise.all(promises)
    .then(data => data.forEach(d => Object.assign(context, d)))

  const body = ReactDOMServer.renderToString(
    <Router location={req.url} context={context}>
      <App context={{ store }}>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i} //eslint-disable-line
              {...route}
              render={props => (
                <div className="route-wrapper">
                  {route.render(props)}
                </div>
              )}
            />
          ))}
        </Switch>
      </App>
    </Router>,
  )

  res.render('index', {
    ...resolveContext(context),
    content: body,
    initialState: serialize(store.getState()),
  })
}

if (module.hot) {
  module.hot.accept('./api', () => {
    apiRouter = new ExpressRouter()
    apiRoutes.forEach((routeConfigurator) => {
      routeConfigurator(apiRouter)
    })
  })
}
