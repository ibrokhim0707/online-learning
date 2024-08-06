const Certificate = require("../models/Certificate");

exports.getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find();
    res.status(200).json(certificates);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.getCertificateById = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id);
    if (!certificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }
    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.createCertificate = async (req, res) => {
  try {
    const newCertificate = new Certificate(req.body);
    await newCertificate.save();
    res.status(201).json(newCertificate);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.updateCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!certificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }
    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.deleteCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findByIdAndDelete(req.params.id);
    if (!certificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }
    res.status(200).json({ message: "Certificate deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
