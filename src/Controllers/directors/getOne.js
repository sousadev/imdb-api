const mongoose = require('mongoose');

const DirectorModel = require('../../database/Models/DirectorModel');

const listDirector = async (req, res) => {
  if (req.headers['authorization'] == null) {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    const Director = await DirectorModel.findById(req.params.id).populate([
      'movies',
    ]);

    await res.send(Director);
  }
};

module.exports = listDirector;
