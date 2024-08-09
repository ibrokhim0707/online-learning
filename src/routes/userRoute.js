// const express = require("express");
// const router = express.Router();
// const {
//   createUser,
//   updateUser,
//   getUserById,
//   deleteUser,
// } = require("../controllers/user.controller");

// router.post("/", createUser);

// router.put("/:id", updateUser);

// router.get("/:id", getUserById);

// router.delete("/:id", deleteUser);

// module.exports = router;


const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// POST /api/users - Yangi foydalanuvchi yaratish
router.post('/', userController.createUser);

// GET /api/users - Barcha foydalanuvchilarni olish
router.get('/', userController.getUsers);

// PUT /api/users/:id - Foydalanuvchini yangilash
router.put('/:id', userController.updateUser);

// DELETE /api/users/:id - Foydalanuvchini o'chirish
router.delete('/:id', userController.deleteUser);

module.exports = router;
