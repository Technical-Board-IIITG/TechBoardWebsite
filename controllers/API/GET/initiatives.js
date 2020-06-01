const express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

var initiatives  = require('../../../models/LandingInitiatives.js');

router.get('/api/techboard/initiatives', (req, res, next) => {
  initiatives
  .find({}, (err, docs) => {
    if(err){
      res.status(500).json({error: err.message});
    }
    else{
      res.json(docs[0]);
    }
  });
});

module.exports = router;
