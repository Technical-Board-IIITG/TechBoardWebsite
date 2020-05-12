const mongoose = require('mongoose');

const LandingEventsPageSchema = new mongoose.Schema({
  logo: String,    //URL of logo image
  about: String,    //About Para  
  events:[{     //Events List
    EventImage: String,     //Event Image URL
    EventTitle: String,     //Event Name
    EventAbout: String,     //Event Description
    EventRef: String      //Event Site Link
  }]
});

module.exports = new mongoose.model('LandingEvents', LandingEventsPageSchema);