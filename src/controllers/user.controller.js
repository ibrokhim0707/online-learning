const User = require("../models/User");


// Yangi foydalanuvchi yaratish
exports.createUser = (req, res) => {
  const { name, email, role } = req.body;

  // Ma'lumotlarni tekshirish
  if (!name || !email || !role) {
      return res.status(400).json({ message: 'Name, email, and role are required' });
  }

  // Yangi foydalanuvchini yaratish (id vaqt belgisi sifatida)
  const newUser = { id: Date.now(), name, email, role };

  // Massivga saqlash yoki boshqa ma'lumotlar omboriga saqlash (temp)
  res.status(201).json({ message: 'User created successfully', user: newUser });
};

// Hamma foydalanuvchilarni olish
exports.getUsers = async (req, res) => {
  try {
      const users = await User.find(); // Barcha foydalanuvchilarni olish
      res.status(200).json(users);
  } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
  }
};

// PUT so'rovini qayta ishlash funksiyasi
exports.updateUser = async (req, res) => {
  try {
      const { id } = req.params; // ID parametrni olish
      const userData = req.body; // Yangilash uchun ma'lumotlar

      // Foydalanuvchini yangilash
      const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true });

      if (!updatedUser) {
          return res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
      }

      res.status(200).json(updatedUser);
  } catch (error) {
      res.status(500).json({ message: 'Server xatosi', error: error.message });
  }
};

// DELETE so'rovini qayta ishlash funksiyasi
exports.deleteUser = async (req, res) => {
  try {
      const { id } = req.params; // ID parametrni olish

      // Foydalanuvchini o'chirish
      const deletedUser = await User.findByIdAndDelete(id);

      if (!deletedUser) {
          return res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
      }

      res.status(200).json({ message: 'Foydalanuvchi muvaffaqiyatli o\'chirildi' });
  } catch (error) {
      res.status(500).json({ message: 'Server xatosi', error: error.message });
  }
};