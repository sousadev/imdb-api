const mongoose = require('mongoose');

const DirectorModel = require('../../database/Models/DirectorModel');

const deleteDirector = async (req, res) => {
  if (req.userType !== 'admin') {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    const director = await Promise.all(
      await DirectorModel.findByIdAndUpdate(
        req.params.id,
        {
          status: 'inactive',
          updatedBy: req.idUser,
          updatedAt: Date.now(),
        },
        { new: true }
      )
    );
    await res.send(director);
  }
};

module.exports = deleteDirector;
