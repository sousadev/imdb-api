const mongoose = require('mongoose');

const VoteModel = require('../../database/Models/VoteModel');

const listVote = async (req, res) => {
  if (!req.headers['authorization']) {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    const Vote = await VoteModel.findById(req.params.id).populate(['movies']);

    await res.send(Vote);
  }
};

module.exports = listVote;
