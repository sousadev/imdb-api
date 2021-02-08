const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  title: {
    type: String,
  },

  movies: [{ type: mongoose.Types.ObjectId, ref: 'Movie' }],

  createdBy: { type: mongoose.Types.ObjectId, ref: 'User', select: false },
  updatedBy: { type: mongoose.Types.ObjectId, ref: 'User', select: false },

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

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;
