const express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

var initiatives  = require('../../../models/LandingInitiatives.js');

router.delete('/api/techboard/initiatives', (req, res, next) => {
  const id = parseInt(req.query.index);
  initiatives
  .find({}, (err, docs) => {
    if(err){
      res.status(500).json({error: err.message});
    }
    else{
      if (id >= 0 && id < docs[0].initiatives.length) {
        docs[0].initiatives.splice(id, 1);
        res.status(200).json(docs[0]);
        docs.save();
      }
      else {
        res.status(500).json({error: "index out of bounds"});
      }
    }
  });
});

module.exports = router;
