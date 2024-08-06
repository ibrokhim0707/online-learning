const express = require("express");
const router = express.Router();
const userEnrollmentController = require("../controllers/user.enrollment");

router.get("/", userEnrollmentController.getAllEnrollments);

router.get("/:id", userEnrollmentController.getEnrollmentById);

router.post("/", userEnrollmentController.createEnrollment);

router.put("/:id", userEnrollmentController.updateEnrollment);

router.delete("/:id", userEnrollmentController.deleteEnrollment);

module.exports = router;
