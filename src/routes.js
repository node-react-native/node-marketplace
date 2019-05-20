const express = require('express')

// using require-dir (see index.js inside controllers folder)
const controllers = require('./app/controllers')

const authMiddleware = require('./app/middlewares/auth')

const routes = express.Router()

routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

// all routes bellow needs authentication
routes.use(authMiddleware)

// Ads CRUD
routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', controllers.AdController.store)
routes.put('/ads/:id', controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)

module.exports = routes
