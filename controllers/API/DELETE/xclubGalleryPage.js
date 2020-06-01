const express = require('express'),
      router = express.Router();
var mongoose = require('mongoose'),
    xcgal = require('../../../models/xclub/gallery/xclubGalleryPage');

router.delete('/api/club/gallery/image', (req, res) => {

    const index = parseInt(req.query.index);
    const clubid = parseInt(req.query.clubID);

    xcgal.find({"clubID" : clubid}, (err, xclubGalleryData) => {
      if(err){
        res.status(500).json({error: err.message});
      }
      else{
        if (index >= 0 && index < xclubGalleryData[0].image.length) {
          xclubGalleryData[0].image.splice(index, 1);
          xclubGalleryData[0].save();
          res.status(200).json(xclubGalleryData[0]);  
        }
        else {
          res.status(500).json({error: "Incorrect index"});
        }
      }
    });
  });
  
  module.exports = router;