const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Lesson", lessonSchema);
