const mongoose = require('mongoose');

const GenreModel = require('../../database/Models/GenreModel');

const updateGenre = async (req, res) => {
  if (req.userType !== 'admin') {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    const genre = await Promise.all(
      await GenreModel.findOneAndUpdate(
        { _id: req.params.id },
        { status: 'inactive', updatedBy: req.idUser, updatedAt: Date.now() }
      )
    );
    await res.send(genre);
  }
};

module.exports = updateGenre;
