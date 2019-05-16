const express = require('express')

// using require-dir (see index.js inside controllers folder)
const controllers = require('./app/controllers')

const authMiddleware = require('./app/middlewares/auth')

const routes = express.Router()

routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

routes.get('/test', authMiddleware, (req, res) => {
  res.json({ ok: true })
})

module.exports = routes
