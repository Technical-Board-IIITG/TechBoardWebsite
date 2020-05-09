const mongoose = require('mongoose');

const LandingInitiativesPageSchema = new mongoose.Schema({
  logo: String,
  about: String,
  initiatives:[{
    InitiativeTitle: String,
    InitiativeAbout: String,
    InitiativeRef: String,
    InitiativeImage: String
  }]
});

module.exports = new mongoose.model('LandingInitiatives', LandingInitiativesPageSchema);