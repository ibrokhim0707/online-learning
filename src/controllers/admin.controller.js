const Admin = require("../models/models.Admin");

exports.createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const admin = new Admin({
      name,
      email,
      password,
    });

    await admin.save();

    res.status(201).json({
      message: "Admin created successfully",
      data: admin,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json({
      data: admins,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }
    res.status(200).json({
      data: admin,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.updateAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const admin = await Admin.findByIdAndUpdate(
      req.params.id,
      { name, email, password },
      { new: true, runValidators: true }
    );
    if (!admin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }
    res.status(200).json({
      message: "Admin updated successfully",
      data: admin,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }
    res.status(200).json({
      message: "Admin deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
