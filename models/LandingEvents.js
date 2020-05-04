const mongoose = require('mongoose');

const LandingEventsPageSchema = new mongoose.Schema({
  events:[{
    EventImage: String,
    EventTitle: String,
    EventDetail: String,
    EventRef: String
  }]
});

module.exports = new mongoose.model('LandingEvents', LandingEventsPageSchema);