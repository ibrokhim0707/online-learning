const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get('/user/:id', authController.getUserInfo);

router.put("/profile", authController.updateUser);

router.delete("/profile", authController.deleteUser);

module.exports = router;
