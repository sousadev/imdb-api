const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  genre: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Genre',
    },
  ],
  language: {
    type: String,
  },
  country: {
    type: String,
  },
  type: {
    type: String,
  },
  awards: {
    type: Array,
  },
  runtime: {
    type: String,
  },

  age: {
    type: Number,
  },

  year: {
    type: Number,
  },
  rating: {
    type: Number,
  },

  votes: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Vote',
    },
  ],
  directors: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Director',
    },
  ],
  writers: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Writer',
    },
  ],

  stars: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Star',
    },
  ],
  poster: {
    type: String,
  },

  images: [{ type: String }],
  videos: [{ type: String }],

  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  updatedBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
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

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
