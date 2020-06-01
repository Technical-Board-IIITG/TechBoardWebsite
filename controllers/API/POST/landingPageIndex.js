const express = require('express'),
      router = express.Router();
var mongoose = require('mongoose'),
    landing = require('../../../models/landing/index/landingPageIndex');

router.post('/api/techboard',(req,res)=>{
    landing.find({}, (err, landingPageIndexData) => {
      if(err){
        res.status(500).json({error: err.message});
      }
      else{
        landingPageIndexData[0].teamM.push({
            photo : req.body.photo,
            name: req.body.name,
            position: req.body.position,
            level: req.body.level,
            contact : [{
                contactNumber : req.body.contactNumber,
                facebook : req.body.facebook,
                twitter : req.body.twitter,
                instagram : req.body.instagram,
                linkedIn : req.body.linkedIn  
            }]
            });
        
        landingPageIndexData[0].save();
        res.status(201).json(landingPageIndexData[0]);
        }
    });

});

module.exports = router;