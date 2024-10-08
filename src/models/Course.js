const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  photo: { type: String },
  lessonsCount: { type: Number, default: 0 },
});

module.exports = mongoose.model("Course", CourseSchema);
