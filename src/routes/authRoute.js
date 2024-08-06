const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/profile", authController.getUserInfo);

router.put("/profile", authController.updateUser);

router.delete("/profile", authController.deleteUser);

module.exports = router;
