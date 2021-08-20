const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  birthDate: { type: Date, required: true },
  gender: { type: String, required: true, max: 30 },
  email: { type: String, required: true, max: 100 },
  cpf: { type: String, required: true, max: 14 },
  startDate: { type: String, required: true, max: 10 },
  team: { type: String, max: 15 },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
