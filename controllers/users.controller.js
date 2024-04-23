const User = require("../models/User");

exports.listUsers = async (req, res) => {
  const users = await User.find();
  res.json(users || []);
};
