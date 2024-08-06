const express = require("express");
const router = express.Router();
const userActivityController = require("../controllers/userActivity.controller");

router.get("/", userActivityController.getAllUserActivities);

router.get("/:id", userActivityController.getUserActivityById);

router.put("/:id", userActivityController.updateUserActivity);

router.delete("/:id", userActivityController.deleteUserActivity);

module.exports = router;
