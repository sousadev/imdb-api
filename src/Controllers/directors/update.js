const mongoose = require('mongoose');

const DirectorModel = require('../../database/Models/DirectorModel');

const updateDirector = async (req, res) => {
  if (req.userType !== 'admin') {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    const data = req.body;
    const Director = await DirectorModel.findByIdAndUpdate(
      req.params.id,
      {
        ...data,
        updatedBy: req.idUser,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    await res.send(Director);
  }
};

module.exports = updateDirector;
