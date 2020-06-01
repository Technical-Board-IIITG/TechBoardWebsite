const express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

var initiatives  = require('../../../models/LandingInitiatives.js');

router.post('/api/techboard/initiatives', (req, res, next) => {
  initiatives
  .find({}, (err, docs) => {
    if(err){
      res.status(500).json({error: err.message});
    }
    else{
      docs[0].initiatives.push({
        InitiativeTitle: req.body.InitiativeTitle,
        InitiativeAbout: req.body.InitiativeAbout,
        InitiativeRef: req.body.InitiativeRef,
        InitiativeImage: req.body.InitiativeImage  
      });
      docs[0].save();
      res.status(200).json(docs[0]);
    }
  });
});

module.exports = router;
