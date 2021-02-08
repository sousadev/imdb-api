const mongoose = require('mongoose');

const StarModel = require('../../database/Models/StarModel');

const updateStar = async (req, res) => {
  if (req.userType !== 'admin') {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    const data = req.body;
    const Star = await StarModel.findByIdAndUpdate(
      req.params.id,
      {
        ...data,
        updatedBy: req.idUser,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    await res.send(Star);
  }
};

module.exports = updateStar;
