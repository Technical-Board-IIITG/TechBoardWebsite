const mongoose = require('mongoose');

const LandingInitiativesPageSchema = new mongoose.Schema({
  logo: String,     //URL of logo image
  about: String,      //About Para
  initiatives:[{      //Initiatives List
    InitiativeTitle: String,      //Initiative Image URL
    InitiativeAbout: String,      //Initiative Name
    InitiativeRef: String,      //Initiative Site Link
    InitiativeImage: String     //Initiative Image URL
  }]
});

module.exports = new mongoose.model('LandingInitiatives', LandingInitiativesPageSchema);