const mongoose = require('mongoose');
const Employee = require('./lib/models/employee');

const henryAdams = new Employee({
  employeeId: 2119251,
  name: 'Henry Adams',
  manager: 'Jeff Williams',
  department: 'Manufacturing',
  payrate: 12.50,
  ssn: 300901234,
})

const isiahRashad = new Employee({
  employeeId: 2119252,
  name: 'Isiah Rashad',
  manager: 'Howard Lee',
  department: 'Inspection',
  payrate: 11.00,
  ssn: 230809012,
})

mongoose.connect('mongo://localhost:27017/', {useNewUrlParser: true, useUnifiedTopology: true});

henryAdams.save().catch(err => console.error(err)).then(() => { console.log('saved sampleEmployee')});
