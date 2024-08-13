const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller'); 
router.get('/', adminController.getAdmins);

router.post('/', adminController.createAdmin);

router.put('/:id', adminController.updateAdmin);

router.delete('/:id', adminController.deleteAdmin);

module.exports = router;
