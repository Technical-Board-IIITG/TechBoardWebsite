const express = require('express'),
      router = express.Router();
var mongoose = require('mongoose'),
    xclub = require('../../../models/xclub/index/xclubIndex');

router.post('/api/club',(req,res)=>{
     const clubid = parseInt(req.query.clubID);
   
   xclub.find({"clubID" : clubid}, (err, xclubIndexData) => {
      if(err){
        res.status(500).json({error: err.message});
      }
      else{
          console.log(xclubIndexData[0]);
        xclubIndexData[0].coordinators.push({
                photo : req.body.photo,
                name : req.body.name,
                position : req.body.position,
                about : req.body.about,
                contact : [{
                    contactNumber : req.body.contactNumber,
                    facebook : req.body.facebook,
                    instagram : req.body.instagram,
                    linkedin : req.body.linkedin,
                    email : req.body.email
                    }]
            });
        
        xclubIndexData[0].save();
        res.status(201).json(xclubIndexData[0]);
        }
    });

});

module.exports = router;