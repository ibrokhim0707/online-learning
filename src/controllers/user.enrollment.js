const UserEnrollment = require("../models/UserEnrollment");

exports.getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await UserEnrollment.find();
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.getEnrollmentById = async (req, res) => {
  try {
    const enrollment = await UserEnrollment.findById(req.params.id);
    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }
    res.status(200).json(enrollment);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.createEnrollment = async (req, res) => {
  try {
    const newEnrollment = new UserEnrollment(req.body);
    await newEnrollment.save();
    res.status(201).json(newEnrollment);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.updateEnrollment = async (req, res) => {
  try {
    const enrollment = await UserEnrollment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }
    res.status(200).json(enrollment);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.deleteEnrollment = async (req, res) => {
  try {
    const enrollment = await UserEnrollment.findByIdAndDelete(req.params.id);
    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }
    res.status(200).json({ message: "Enrollment deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
