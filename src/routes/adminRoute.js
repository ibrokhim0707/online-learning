const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const isAdmin = require("../middlewares/is-admin.js")

router.post("/admins", isAdmin, adminController.createAdmin);
router.get("/admins", adminController.getAllAdmins);
router.get("/admins/:id", adminController.getAdminById);
router.put("/admins/:id", adminController.updateAdmin);
router.delete("/admins/:id", adminController.deleteAdmin);

module.exports = router;
