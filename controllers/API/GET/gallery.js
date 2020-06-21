const express = require('express');
const landingGallery = require('../../../models/landingGallery.js');

const router = express.Router();

router.get('/api/techboard/gallery', (req, res) => {
  landingGallery
    .find({}, (err, gallery) => {
      if (err) {
        res.statusCode = 500;
        res.json({ error: err.message });
      } else {
        res.json(gallery[0].images);
      }
    });
});

module.exports = router;
