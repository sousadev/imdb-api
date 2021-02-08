const mongoose = require('mongoose');
const CryptoJS = require('crypto-js');

const MovieModel = require('../../database/Models/MovieModel');

const listMovie = async (req, res) => {
  if (!req.headers['authorization']) {
    await res.status(401).json({ message: 'Please go to login.' });
  } else {
    req.query.genre ? (queryQ = { genre: req.query.genre }) : null;
    req.query.director ? (queryQ = { directors: req.query.director }) : null;
    req.query.star ? (queryQ = { stars: req.query.star }) : null;
    req.query.writer ? (queryQ = { writers: req.query.writer }) : null;

    const Movie = await MovieModel.find(await queryQ).populate([
      'genre',
      'director',
      'writer',
      'star',
    ]);
    return await res.send(Movie);
  }
};

module.exports = listMovie;
