const mongoose = require('mongoose');

//xclub index page - data model

const xclubIndexPageSchema = new mongoose.Schema({

    clubID : Number,
    name : String,
    logo : String,
    quote : String,
    about : String,
//member card data
coordinators : [{
    photo : String,
    name : String,
    position : String,
    about : String,
    contact : [{
        contactNumber : Number,
        facebook : String,
        instagram : String,
        linkedin : String,
        email : String
        }]
    
}]

});

//Creating and exporting the xclub index data model instance
module.exports = new mongoose.model('XClub' , xclubIndexPageSchema);