import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import cookieParser from 'cookie-parser'
import expressHandlebars from 'express-handlebars'
import * as config from './core/config'
import * as router from './router'


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

app.get('*', (req, res, next) => {
  router.resolve(req, res, next)
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
