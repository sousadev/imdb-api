const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  score: {
    type: Number,
  },

  movie: { type: mongoose.Types.ObjectId, ref: 'Movie' },

  createdBy: { type: mongoose.Types.ObjectId, ref: 'User' },
  updatedBy: { type: mongoose.Types.ObjectId, ref: 'User' },

  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  status: {
    type: String,
    default: 'active',
  },
});

const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
