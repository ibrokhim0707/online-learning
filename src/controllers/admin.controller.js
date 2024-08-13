const Admin = require('../models/models.Admin');

exports.createAdmin = async (req, res) => {
    try {
        const admin = new Admin(req.body);
        await admin.save();
        res.status(201).send(admin);
    } catch (error) {
        res.status(400).send({ message: "Server xatosi", error: error.message });
    }
};

exports.getAdmins = async (req, res) => {
    try {
        const admins = await Admin.find({});
        res.status(200).send(admins);
    } catch (error) {
        res.status(500).send({ message: "Server xatosi", error: error.message });
    }
};

exports.updateAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!admin) {
            return res.status(404).send({ message: "Admin topilmadi" });
        }
        res.status(200).send(admin);
    } catch (error) {
        res.status(400).send({ message: "Server xatosi", error: error.message });
    }
};

exports.deleteAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id);
        if (!admin) {
            return res.status(404).send({ message: "Admin topilmadi" });
        }
        res.status(200).send(admin);
    } catch (error) {
        res.status(500).send({ message: "Server xatosi", error: error.message });
    }
};
