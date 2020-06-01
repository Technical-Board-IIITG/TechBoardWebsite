const mongoose = require('mongoose');

//landing page model

const landingPageSchema = new mongoose.Schema({

    logo : String,
    quote : String,
    about : String,
//member data
    teamM : [{
        photo : String,
        name : String,
        position : String,
        level : Number,
        contact : [{
            contactNumber : Number,
            facebook : String,
            twitter : String,
            instagram : String,
            linkedIn : String
        }]
    }],

    contact : [{
        socialURLs : [{
            facebook : String,
            twitter : String,
            instagram : String,
            linkedIn : String,
            snapchat : String

        }]
    }]

});

//Creating and exporting the landingData model instance
module.exports = new mongoose.model('Landing' , landingPageSchema);