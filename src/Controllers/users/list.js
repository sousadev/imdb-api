const UsersQuery = require('../../database/Models/UserModel');

const getUsers = async (req, res) => {
  if (req.userType !== 'admin') {
    res.status(401).json({ message: 'not authorized.' });
  } else {
    return await UsersQuery.find()
      .where({ status: 'active' })
      .exec(async function (err, dados) {
        await res.send(await dados);
      });
  }
};

module.exports = getUsers;
