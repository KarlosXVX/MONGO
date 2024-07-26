const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema({
  address: { type: String, requiere: true, trim: true },
  name: { type: String, requiere: true, trim: true },
  movies: [{ type: mongoose.Types.ObjectId, ref: 'movies' }],
}, {
  timestamps: true,
});

const Cinema = mongoose.model('cinemas', cinemaSchema, 'cinemas');

module.exports = Cinema; 