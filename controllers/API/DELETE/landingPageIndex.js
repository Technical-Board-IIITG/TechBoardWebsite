const express = require('express'),
      router = express.Router();
var mongoose = require('mongoose'),
    landing = require('../../../models/landing/index/landingPageIndex');

router.delete('/api/techboard/team', (req, res) => {

    const index = parseInt(req.query.index);

    landing.find({}, (err, landingPageIndexData) => {
      if(err){
        res.status(500).json({error: err.message});
      }
      else{
        if (index >= 0 && index < landingPageIndexData[0].teamM.length) {
          landingPageIndexData[0].teamM.splice(index, 1);
          landingPageIndexData[0].save();
          res.status(200).json(landingPageIndexData[0]);  
        }
        else {
          res.status(500).json({error: "Incorrect index"});
        }
      }
    });
  });
  
  module.exports = router;