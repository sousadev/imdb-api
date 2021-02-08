const mongoose = require('mongoose');

const StarModel = require('../../database/Models/StarModel');

const createStar = async (req, res) => {
  if (req.userType !== 'admin') {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    let data = req.body;
    data.createdAt = Date.now();
    data.createdBy = req.idUser;
    const Star = await StarModel.create({ ...data });

    await res.send(Star);
  }
};

module.exports = createStar;
