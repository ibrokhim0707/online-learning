const express = require("express");
const router = express.Router();
const {
  createUser,
  updateUser,
  getUserById,
  deleteUser,
} = require("../controllers/user.controller");

router.post("/", createUser);

router.put("/:id", updateUser);

router.get("/:id", getUserById);

router.delete("/:id", deleteUser);

module.exports = router;
