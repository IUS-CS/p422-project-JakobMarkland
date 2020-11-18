const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
  employeeId: Number,
  name: String,
  manager: String,
  department: String,
  payrate: Number,
  ssn: Number,
});

EmployeeSchema.query.byEmployeeID = function(id) {
  return this.where({employeeId: id});
}

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
