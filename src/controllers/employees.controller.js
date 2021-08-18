const Employee = require('../models/employee.model');

exports.list = (req, res, next) => {
  Employee.find({}, (err, employees) => {
    if (err) return next(err);
    res.send(employees);
  });
};

exports.detail = (req, res, next) => {
  Employee.findById(req.params.id, (err, employee) => {
    if (err) return next(err);
    res.send(employee);
  });
};

exports.create = (req, res, next) => {
  const employee = new Employee({
    name: req.body.name,
    birthDate: req.body.birthDate,
    gender: req.body.gender,
    email: req.body.email,
    cpf: req.body.cpf,
    startDate: req.body.startDate,
    team: req.body.team,
  });
  employee.save((err) => {
    if (err) {
      return next(err);
    }
    res.send('Employee registration succesful!');
  });
};

exports.update = (req, res, next) => {
  Employee.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (err, employee) => {
      if (err) return next(err);
      res.send('Employee update sucessful!.');
    }
  );
};

exports.delete = function (req, res, next) {
  Employee.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    res.send('Employee delete successful!');
  });
};
