const UserQuery = require('../../database/Models/UserModel');
const mongoose = require('mongoose');
const connection = require('../../database/connection');

const deleteUser = async (req, res) => {
  if (req.userType !== 'admin') {
    res.status(401).json({ message: 'not authorized.' });
  } else {
    const userDelete = await req.params.id;

    await UserQuery.findOneAndUpdate(
      { _id: await userDelete },
      {
        updatedAt: Date.now(),
        updatedBy: await req.idUser,
        status: 'inactive',
      },
      { new: true, overWrite: false },

      async function (err, dados) {
        await res.send(dados);
      }
    );
  }
};

module.exports = deleteUser;
