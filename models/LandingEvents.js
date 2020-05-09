const mongoose = require('mongoose');

const LandingEventsPageSchema = new mongoose.Schema({
  logo: String,
  about: String,
  events:[{
    EventImage: String,
    EventTitle: String,
    EventAbout: String,
    EventRef: String
  }]
});

module.exports = new mongoose.model('LandingEvents', LandingEventsPageSchema);