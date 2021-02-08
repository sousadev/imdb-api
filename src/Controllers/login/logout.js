const User = require('../../database/Models/UserModel');
const jwt = require('jsonwebtoken');

const logout = async (req, res) => {
  res.json({ auth: false, token: null });
};

module.exports = logout;
