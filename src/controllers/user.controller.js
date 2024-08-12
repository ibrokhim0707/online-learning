const User = require("../models/User");


exports.createUser = (req, res) => {
  const { name, email, role } = req.body;

  if (!name || !email || !role) {
      return res.status(400).json({ message: 'Name, email, and role are required' });
  }

  const newUser = { id: Date.now(), name, email, role };

  res.status(201).json({ message: 'User created successfully', user: newUser });
};

exports.getUsers = async (req, res) => {
  try {
      const users = await User.find(); 
      res.status(200).json(users);
  } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
      const { id } = req.params;
      const userData = req.body;

      const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true });

      if (!updatedUser) {
          return res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
      }

      res.status(200).json(updatedUser);
  } catch (error) {
      res.status(500).json({ message: 'Server xatosi', error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
      const { id } = req.params; 

      const deletedUser = await User.findByIdAndDelete(id);

      if (!deletedUser) {
          return res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
      }

      res.status(200).json({ message: 'Foydalanuvchi muvaffaqiyatli o\'chirildi' });
  } catch (error) {
      res.status(500).json({ message: 'Server xatosi', error: error.message });
  }
};