const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const employeeController = require('../controllers/employees.controller');

router.get('/', employeeController.list);
router.get('/:id', employeeController.detail);
router.post('/', employeeController.create);
router.put('/:id', employeeController.update);
router.delete('/:id', employeeController.delete);

module.exports = router;
