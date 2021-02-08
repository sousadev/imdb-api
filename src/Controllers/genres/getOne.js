const mongoose = require('mongoose');
const CryptoJS = require('crypto-js');

const GenreModel = require('../../database/Models/GenreModel');

const getOneGenre = async (req, res) => {
  if (req.userType !== 'admin') {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    const genre = await GenreModel.find({ _id: req.params.id }).select([
      '+createdBy',
      '+updatedBy',
    ]);

    await res.send(genre);
  }
};

module.exports = getOneGenre;
