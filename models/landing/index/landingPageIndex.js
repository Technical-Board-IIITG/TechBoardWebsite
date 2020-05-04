const mongoose = require('mongoose');

//landing page model

const landingPageSchema = new mongoose.Schema({

//member data
    teamMember : [{
        photo : String,
        name : String,
        designation : String,
        facebook : String,
        twitter : String,
        instagram : String
    }]

});

//Creating and exporting the landingData model instance
module.exports = new mongoose.model('landingPage' , landingPageSchema);