const express = require('express');
const employees = require('./controllers/employees');

let routes = express.Router();

routes.route('/employees')
  .get(employees.root)

routes.route('/employees/:employee')
  .get(employees.byEmployee)

module.exports = routes;
