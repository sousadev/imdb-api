const mongoose = require('mongoose');
const CryptoJS = require('crypto-js');

const GenreModel = require('../../database/Models/GenreModel');

const listGenre = async (req, res) => {
  if (req.userType !== 'admin') {
    const genre = await GenreModel.find();
    await res.send(genre);
  } else {
    const genres = await GenreModel.find().select(['+createdBy', '+updatedBy']);
    await res.send(genres);
  }
};

module.exports = listGenre;
