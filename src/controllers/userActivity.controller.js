const UserActivity = require("../models/UserActivity");

exports.getAllUserActivities = async (req, res) => {
  try {
    const userActivities = await UserActivity.find();
    res.status(200).json(userActivities);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.getUserActivityById = async (req, res) => {
  try {
    const userActivity = await UserActivity.findById(req.params.id);
    if (!userActivity) {
      return res.status(404).json({ message: "User activity not found" });
    }
    res.status(200).json(userActivity);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.updateUserActivity = async (req, res) => {
  try {
    const userActivity = await UserActivity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!userActivity) {
      return res.status(404).json({ message: "User activity not found" });
    }
    res.status(200).json(userActivity);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.deleteUserActivity = async (req, res) => {
  try {
    const userActivity = await UserActivity.findByIdAndDelete(req.params.id);
    if (!userActivity) {
      return res.status(404).json({ message: "User activity not found" });
    }
    res.status(200).json({ message: "User activity deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
