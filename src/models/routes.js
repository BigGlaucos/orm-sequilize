const express = require('express');

const userController = require('../controllers/userController')

const routes = express.Router();

routes.post("/users", userController.store)

routes.get("/all", userController.index)

routes.get("/unique/:id", userController.unique);

routes.get("/update/:id", userController.update);

routes.delete("/users/:id", userController.delete);


module.exports = routes;

