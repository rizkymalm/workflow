const express = require("express");
const DashboardController = require("../controllers/dashboard");
const Router = express.Router();

Router.get("/", DashboardController.getIndex);

module.exports = Router;