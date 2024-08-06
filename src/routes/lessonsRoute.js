const express = require("express");
const router = express.Router();
const lessonsController = require("../controllers/lessons.controller");

router.get("/", lessonsController.getAllLessons);

router.get("/:id", lessonsController.getLessonById);

router.post("/", lessonsController.createLesson);

router.put("/:id", lessonsController.updateLesson);

router.delete("/:id", lessonsController.deleteLesson);

module.exports = router;
