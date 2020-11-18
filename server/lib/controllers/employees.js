const Employee = require('../models/employee');

module.exports = {
  root: (req, res) => {
    Employee.find().exec((err, employees) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      let ret = [];
      for (let employee of employees) {
        ret.push(employee.employeeId);
      }
      res.json(ret);
    })
  },
  byEmployee: (req, res) => {
    const employeeID = req.params.employeeId;

    Employee.findOne().byEmployeeID(employeeID).exec((err, employee) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      if (!employee) {
        res.status(404);
        res.json({'err': 'employee not found'});
        return;
      }
      console.log('sending employee: ' + employee);
      res.json(employee);
    })
  }
}
