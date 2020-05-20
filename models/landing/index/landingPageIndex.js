const mongoose = require('mongoose');

//landing page model

const landingPageSchema = new mongoose.Schema({

    logo : URL,
    quote : String,
    about : String,
//member data
    teamM : [{
        photo : URL,
        name : String,
        position : String,
        level : Number,
        contact : [{
            contactNumber : Number
        }]
    }],

    contact : [{
        socialURLs : [{
            facebook : URL,
            twitter : URL,
            instagram : URL
        }]
    }]

});

//Creating and exporting the landingData model instance
module.exports = new mongoose.model('Landing' , landingPageSchema);