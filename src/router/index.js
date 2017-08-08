import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router'
import { Route, matchPath } from 'react-router-dom'
import serialize from 'serialize-javascript'
import App from '../components/App/App'
import configureStore from '../redux/configureStore'
import routes from './shared'

export function installApi() {

}

export async function resolve(req, res) {
  const context = {}
  // configure store with initial state
  const store = configureStore({})

  const promises = []
  routes.some((route) => {
    const match = matchPath(req.url, route)

    if (match && route.loadData) {
      promises.push(route.loadData({
        ...match,
        store,
      }))
    }

    return match
  })

  await Promise.all(promises)
    .then(data => data.forEach(d => Object.assign(context, d)))

  const body = ReactDOMServer.renderToString(
    <Router location={req.url} context={context}>
      <App context={{ store }}>
        {routes.map(route => (
          <Route
            key={route.path}
            {...route}
            render={props => (
              <div className="route-wrapper">
                {route.render(props)}
              </div>
            )}
          />
        ))}
      </App>
    </Router>,
  )

  res.render('index', {
    title: context.title || 'Untitled Page - React',
    description: context.description || 'Lorem ipsum',
    image: context.image,
    content: body,
    initialState: serialize(store.getState()),
  })
}
