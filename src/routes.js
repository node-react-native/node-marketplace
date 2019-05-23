const express = require('express')
const validate = require('express-validation')

// using require-dir (see index.js inside controllers folder)
const controllers = require('./app/controllers')
const validators = require('./app/validators')

const authMiddleware = require('./app/middlewares/auth')

const routes = express.Router()

routes.post('/users', validate(validators.User), controllers.UserController.store)
routes.post('/sessions', validate(validators.Session), controllers.SessionController.store)

// all routes bellow needs authentication
routes.use(authMiddleware)

// Ads CRUD
routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', validate(validators.Ad), controllers.AdController.store)
routes.put('/ads/:id', validate(validators.Ad), controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)

// Purchase
routes.post('/purchases', validate(validators.Purchase), controllers.PurchaseController.store)

module.exports = routes
