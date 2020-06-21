const mongoose = require('mongoose');

const landingGallerySchema = new mongoose.Schema({
  images: [
    {
      title: String,
      description: String,
      url: String,
    },
    {
      timestamps: true,
    }
  ],
});

module.exports = new mongoose.model('landingGallery', landingGallerySchema);
