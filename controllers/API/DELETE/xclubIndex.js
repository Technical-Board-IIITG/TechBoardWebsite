const express = require('express'),
      router = express.Router();
var mongoose = require('mongoose'),
    xclub = require('../../../models/xclub/index/xclubIndex');

router.delete('/api/club/coordinators', (req, res) => {

    const index = parseInt(req.query.index);
    const clubid = parseInt(req.query.clubID);

    xclub.find({"clubID" : clubid}, (err, xclubIndexData) => {
      if(err){
        res.status(500).json({error: err.message});
      }
      else{
        if (index >= 0 && index < xclubIndexData[0].coordinators.length) {
          xclubIndexData[0].coordinators.splice(index, 1);
          xclubIndexData[0].save();
          res.status(200).json(xclubIndexData[0]);  
        }
        else {
          res.status(500).json({error: "Incorrect index"});
        }
      }
    });
  });
  
  module.exports = router;