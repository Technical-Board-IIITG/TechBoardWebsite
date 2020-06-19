const mongoose = require('mongoose');

const landingGallerySchema = new mongoose.Schema({
  title: String,
  description: String,
  coverImage: String,
  date: Date,
  url: String,
});

module.exports = new mongoose.model('landingImage', landingGallerySchema);
