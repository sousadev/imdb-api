const mongoose = require('mongoose');

const MovieModel = require('../../database/Models/MovieModel');

const updateMovie = async (req, res) => {
  if (req.userType !== 'admin') {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    const data = req.body;
    const Movie = await MovieModel.findByIdAndUpdate(
      req.params.id,
      {
        ...data,
        updatedBy: req.idUser,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    await res.send(Movie);
  }
};

module.exports = updateMovie;
