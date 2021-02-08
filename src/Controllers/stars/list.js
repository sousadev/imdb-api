const mongoose = require('mongoose');

const StarModel = require('../../database/Models/StarModel');

const listStar = async (req, res) => {
  if (!req.headers['authorization']) {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    if (req.userType === 'admin') {
      const Star = await StarModel.find()
        .select(['+createdBy', '+updatedBy'])

        .populate(['movies']);

      await res.send(Star);
    } else {
      const Star = await StarModel.find().populate(['movies']);
      await res.send(Star);
    }
  }
};

module.exports = listStar;
