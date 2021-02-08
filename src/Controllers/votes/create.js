const mongoose = require('mongoose');

const VoteModel = require('../../database/Models/VoteModel');
const MovieModel = require('../../database/Models/MovieModel');

const createVote = async (req, res) => {
  if (req.userType !== 'consumer') {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    let data = req.body;
    var Scores = [];

    if (data.score > 4 || data.score < 0) {
      await res.status(401).json({ message: 'Invalid Vote.' });
      return;
    }
    data.createdAt = Date.now();
    data.createdBy = req.idUser;
    const Vote = await VoteModel.create({ ...data });

    await MovieModel.findByIdAndUpdate(
      data.movie,
      { $push: { votes: Vote._id } },
      { new: true, overWrite: false }
    );
    let dados = await MovieModel.findById(data.movie).populate('votes');

    dados.votes.map(async (e) => {
      await Scores.push(e.score);
    });
    const total = Scores.reduce(
      (total, currentElement) => total + currentElement
    );
    const rating = total / Scores.length;
    await MovieModel.findByIdAndUpdate(
      data.movie,
      { $set: { rating: await rating } },
      { new: true, overWrite: false }
    );
    await res.send(Vote);
  }
};

module.exports = createVote;
