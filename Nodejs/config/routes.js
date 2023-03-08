const routes = require("express").Router();

routes.use("/api/login", require("../controllers/LoginController"));
routes.use("/api/employee", require("../controllers/EmployeeController"));

module.exports = routes;