const mongoose = require("mongoose");

const userEnrollmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
});

module.exports = mongoose.model("UserEnrollment", userEnrollmentSchema);
