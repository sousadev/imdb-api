const mongoose = require('mongoose');

const MovieModel = require('../../database/Models/MovieModel');

const getOneMovie = async (req, res) => {
  if (req.userType !== 'admin') {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    const Movie = await MovieModel.findById(req.params.id).populate([
      'genre',
      'createdBy',
      'director',
      'writer',
    ]);

    await res.send(Movie);
  }
};

module.exports = getOneMovie;
