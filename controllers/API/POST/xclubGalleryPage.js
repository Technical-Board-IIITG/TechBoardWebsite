const express = require('express'),
      router = express.Router();
var mongoose = require('mongoose'),
    xcgal = require('../../../models/xclub/gallery/xclubGalleryPage');

router.post('/api/club/gallery',(req,res)=>{
    
    const clubid = parseInt(req.query.clubID);
    
   xcgal.find({"clubID" : clubid}, (err, xclubGalleryData) => {
       
      if(err){
        res.status(500).json({error: err.message});
      }
      else{
          xclubGalleryData[0].image.push({
                title : req.body.title,
                about : req.body.about,
                coverImage : req.body.coverImage,
                date : req.body.date,
                urls : req.body.urls
            });
        
        xclubGalleryData[0].save();
        res.status(201).json(xclubGalleryData[0]);
        }
    });

});

module.exports = router;