const express = require('express'),
      router = express.Router();
var mongoose = require('mongoose'),
    xcgal = require('../../../models/xclub/gallery/xclubGalleryPage');

router.get('/api/club/gallery',(req,res)=>{
    
  const clubid = parseInt(req.query.clubID);
   xcgal.find({"clubID" : clubid}, (err, xclubGalleryData) => {
      if(err){
        res.status(500).json({error: err.message});
      }
      else{
        res.status(200).json(xclubGalleryData[0]);
        }
    });

});

module.exports = router;