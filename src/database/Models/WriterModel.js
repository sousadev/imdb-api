const mongoose = require('mongoose');

const writerSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],

  photo: {
    type: String,
  },

  awards: [
    {
      type: String,
    },
  ],
  country: {
    type: String,
  },

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

const WriterModel = mongoose.model('Writer', writerSchema);

module.exports = WriterModel;
