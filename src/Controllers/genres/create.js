const mongoose = require('mongoose');
const CryptoJS = require('crypto-js');

const GenreModel = require('../../database/Models/GenreModel');

const createGenre = async (req, res) => {
  if (req.userType !== 'admin') {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    let data = req.body;
    data.createdAt = Date.now();
    data.createdBy = req.idUser;
    const genre = await await GenreModel.create({ ...data });
    await res.send(genre);
  }
};

module.exports = createGenre;
