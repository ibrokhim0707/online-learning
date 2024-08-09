const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller'); // To'g'ri import qilish

// Adminlarni olish
router.get('/', adminController.getAdmins);

// Admin qo'shish
router.post('/', adminController.createAdmin);

// Adminni yangilash
router.put('/:id', adminController.updateAdmin);

// Adminni o'chirish
router.delete('/:id', adminController.deleteAdmin);

module.exports = router;
