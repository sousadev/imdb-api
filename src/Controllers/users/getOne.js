const UsersQuery = require('../../database/Models/UserModel');

const getUser = async (req, res) => {
  if (req.userType !== 'admin') {
    res.status(401).json({ message: 'not authorized.' });
  } else {
    await UsersQuery.findById(req.params.id, async function (err, response) {
      await res.json(await response);
    });
  }
};

module.exports = getUser;
