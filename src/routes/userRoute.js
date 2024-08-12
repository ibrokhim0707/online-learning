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

router.post('/', userController.createUser);

router.get('/', userController.getUsers);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
