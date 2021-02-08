const mongoose = require('mongoose');

const DirectorModel = require('../../database/Models/DirectorModel');

const createDirector = async (req, res) => {
  if (req.userType !== 'admin') {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    let data = req.body;
    data.createdAt = Date.now();
    data.createdBy = req.idUser;
    const director = await DirectorModel.create({ ...data });

    await res.send(director);
  }
};

module.exports = createDirector;
