const jwt = require("jsonwebtoken");

exports.generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, "secretkey", {
    expiresIn: "2h",
  });
};
