const express = require('express'),
      router = express.Router();
var mongoose = require('mongoose'),
    landing = require('../../../models/landing/index/landingPageIndex');

router.get('/api/techboard',(req,res)=>{

    landing.find({}, (err, landingPageIndexData) => {
      if(err){
        res.status(500).json({error: err.message});
      }
      else{
        res.status(200).json(landingPageIndexData[0]);
        }
    });

});

module.exports = router;