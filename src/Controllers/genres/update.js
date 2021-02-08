const mongoose = require('mongoose');

const GenreModel = require('../../database/Models/GenreModel');

const updateGenre = async (req, res) => {
  if (req.userType !== 'admin') {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    const data = req.body;
    const genre = await GenreModel.findByIdAndUpdate(
      req.params.id,
      {
        ...data,
        updatedBy: req.idUser,
        updatedAt: Date.now(),
      },
      { new: true }
    ).select(['+createdBy', '+updatedBy']);

    await res.send(genre);
  }
};

module.exports = updateGenre;
