const mongoose = require('mongoose');

const LandingInitiativesPageSchema = new mongoose.Schema({
  initiatives:[{
    InitiativeTitle: String,
    InitiativeDetail: String,
    InitiativeRef: String,
    InitiativeImage: String
  }]
});

module.exports = new mongoose.model('LandingInitiatives', LandingInitiativesPageSchema);