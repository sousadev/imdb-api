const mongoose = require('mongoose');

const DirectorModel = require('../../database/Models/DirectorModel');

const listDirector = async (req, res) => {
  if (req.headers['authorization'] == null) {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    if (req.userType) {
      const Director = await DirectorModel.find()
        .select(['+createdBy', '+updatedBy'])
        .populate(['movies']);

      await res.send(Director);
    } else {
      const Director = await DirectorModel.find().populate(['movies']);

      await res.send(Director);
    }
  }
};

module.exports = listDirector;
