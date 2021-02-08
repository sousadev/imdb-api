const mongoose = require('mongoose');

const VoteModel = require('../../database/Models/VoteModel');

const listVote = async (req, res) => {
  if (req.userType !== 'admin') {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    const Vote = await VoteModel.find().populate(['movies']);
    await res.send(Vote);
  }
};

module.exports = listVote;
