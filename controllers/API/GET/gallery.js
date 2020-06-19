const express = require('express');
const mongoose = require('mongoose');

const landingGallery = require('../../../models/landingGallery.js');

const router = express.Router();

// const newGallery = new landingGallery({
//   title: 'New image',
//   description: 'a description',
// });

// newGallery.save((err, gallery) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(gallery);
//   }
// });

console.log(landingGallery.find());

router.get('/api/techboard/gallery', (req, res) => {
  console.log('Working on techboard/gallery');
  landingGallery
    .find({}, (err, gallery) => {
      if (err) {
        res.statusCode = 500;
        console.error('Error occured while fetching gallery');
        res.send('Error occured while fetching gallery');
      } else {
        console.log(gallery);
        console.log('sending techboard/gallery');
        res.json(gallery);
      }
    });
});

module.exports = router;
