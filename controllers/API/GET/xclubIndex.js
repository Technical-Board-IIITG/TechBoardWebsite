const express = require('express'),
      router = express.Router();
var mongoose = require('mongoose'),
    xclub = require('../../../models/xclub/index/xclubIndex');

router.get('/api/club',(req,res)=>{
    
    const clubid = parseInt(req.query.clubID);
   xclub.find({"clubID" : clubid}, (err, xclubIndexData) => {
      if(err){
        res.status(500).json({error: err.message});
      }
      else{
        res.status(200).json(xclubIndexData[0]);
        }
    });

});

module.exports = router;