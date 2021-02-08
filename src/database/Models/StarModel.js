const mongoose = require('mongoose');

const starSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],

  photo: {
    type: String,
  },
  country: {
    type: String,
  },
  awards: [
    {
      type: String,
    },
  ],

  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    select: false,
  },
  updatedBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    select: false,
  },

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

const StarModel = mongoose.model('Star', starSchema);

module.exports = StarModel;
