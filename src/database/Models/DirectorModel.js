const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
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

const DirectorModel = mongoose.model('Director', directorSchema);

module.exports = DirectorModel;
