const express = require('express');

const userController = require('../controllers/userController')

const routes = express.Router();

routes.post("/users",userController.store)

routes.get("/all",userController.index)

routes.delete("/users",userController.delete)

module.exports = routes;

