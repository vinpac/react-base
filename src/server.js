import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import expressHandlebars from 'express-handlebars'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import * as config from './core/config'
import { resolveContext } from './core/constants'
import * as router from './router'
import ErrorView from './router/shared/error/ErrorView'


const app = express()

// Static files
app.use(express.static(path.resolve(__dirname, 'public')))

// Cookie
app.use(cookieParser())

// Body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// View renderer
app.set('x-powered-by', false)
app.set('views', path.resolve(__dirname, 'templates/views'))
app.set('view engine', 'hbs')
app.engine('hbs', expressHandlebars({
  extname: 'hbs',
  defaultLayout: 'html.hbs',
  layoutsDir: path.resolve(__dirname, 'templates'),
}))

app.use((req, res, next) => router.apiMiddleware(req, res, next))

app.get('*', async (req, res, next) => {
  try {
    await router.resolve(req, res, next)
  } catch (error) {
    next(error)
  }
})

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.status(error.status || 500)

  const body = ReactDOMServer.renderToString(
    <ErrorView error={error} />,
  )

  res.render('index', {
    ...resolveContext(),
    content: body,
    initialState: {},
  })
})

if (!module.hot) {
  app.listen(config.port, () => {
    console.info(`The server is running at http://localhost:${config.port}/`)
  })
} else {
  app.hot = module.hot
  module.hot.accept('./router')
}

export default app
