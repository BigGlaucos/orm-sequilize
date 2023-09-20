const express = require('express');

const userController = require('../controllers/userController')

const routes = express.Router();

routes.post("/users",userController.store)

routes.get("/users",userController.index)


module.exports = routes;