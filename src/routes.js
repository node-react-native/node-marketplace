const express = require('express')

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const authMiddleware = require('./app/middlewares/auth')

const routes = express.Router()

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)
routes.get('/test', authMiddleware, (req, res) => {
  res.json({ ok: true })
})

module.exports = routes
