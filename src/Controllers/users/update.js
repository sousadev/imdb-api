const UserQuery = require('../../database/Models/UserModel');

const updateUser = async (req, res) => {
  if (req.userType !== 'admin') {
    res.status(401).json({ message: 'not authorized.' });
  } else {
    const userUpdate = req.params.id;
    let data = req.body;
    data.updatedAt = Date.now;

    await UserQuery.findOneAndUpdate(
      { _id: await userUpdate },
      { ...data, updatedBy: await req.idUser, updatedAt: Date.now() },
      { new: true, overWrite: false },
      async function (err, dados) {
        await res.send(dados);
      }
    );
  }
};

module.exports = updateUser;
