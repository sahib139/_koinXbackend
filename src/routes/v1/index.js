const routes = require('express').Router();
const cryptoRoutes = require("./crypto");

routes.use(cryptoRoutes);

module.exports = routes;