const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const employeeController = require('../controllers/employees.controller');

router.get('/testar', employeeController.test);

module.exports = router;
