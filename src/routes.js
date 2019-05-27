const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')

// using require-dir (see index.js inside controllers folder)
const controllers = require('./app/controllers')
const validators = require('./app/validators')

const authMiddleware = require('./app/middlewares/auth')

const routes = express.Router()

routes.post('/users', validate(validators.User), handle(controllers.UserController.store))
routes.post('/sessions', validate(validators.Session), handle(controllers.SessionController.store))

// all routes bellow needs authentication
routes.use(authMiddleware)

// Ads CRUD
routes.get('/ads', handle(controllers.AdController.index))
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', validate(validators.Ad), handle(controllers.AdController.store))
routes.put('/ads/:id', validate(validators.Ad), handle(controllers.AdController.update))
routes.delete('/ads/:id', handle(controllers.AdController.destroy))

// Purchase
routes.post('/purchases', validate(validators.Purchase), handle(controllers.PurchaseController.store))

module.exports = routes
