const jwt = require('jsonwebtoken');

const generateToken = async (idUser, username, userType) => {
  return jwt.sign({ idUser, username, userType }, process.env.SECRET_KEY, {
    expiresIn: 86400, // expires in 24hs
  });
};

module.exports = generateToken;
