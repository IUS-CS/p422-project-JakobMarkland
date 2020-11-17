const Employee = require('../models/employee');

module.exports = {
  root: (req, res) => {
    Employee.find().exec((err, employees) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      res.json(employees);
    })
  },
  byEmployee: (req, res) => {
    const employeeID = req.params.employeeId;

    Employee.findOne().byEmployeeID(employeeID).exec((err, employee) => {

    })
  }
}
