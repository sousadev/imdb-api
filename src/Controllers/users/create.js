const mongoose = require('mongoose');
const CryptoJS = require('crypto-js');

const UserModel = require('../../database/Models/UserModel');

const postUser = async (req, res) => {
  if (req.userType !== 'admin') {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    const data = req.body;
    // Encrypt Password
    var passwordEncrypted = CryptoJS.AES.encrypt(
      data.password,
      process.env.SECRET_PASS_VALIDATION
    ).toString();

    const findUser = await UserModel.find(
      { username: data.username },
      function (err, response) {
        response._id
          ? console.log(`Find user ID: ${response._id}`)
          : console.log('no users found!');
        return response;
      }
    );

    if (!(await findUser._id)) {
      let User = new UserModel({
        username: data.username,
        password: passwordEncrypted,
        userType: data.userType,
        email: data.email,
        name: data.name,
        status: 'active',
        createdAt: Date.now(),
        createdBy: req.idUser,
      });
      await User.save()
        .then(async (doc) => {
          await res.send(doc);
        })
        .catch((err) => {
          console.log(err);
          res.send(401).json({ message: 'error on add user' });
        });
    } else {
      res.status(500).json({ message: 'Already exists this user!' });
    }
  }
};

module.exports = postUser;
