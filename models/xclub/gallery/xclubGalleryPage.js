const mongoose = require('mongoose');

//xclub gallery page model

const xclubGalleryPageSchema = new mongoose.Schema({

    clubID : Number,
    quote : String,
    about : String,
    image: [{
        title : String,
        about : String,
        coverImage : String,
        date : Date,
        urls : [{
            url : String
        }]
    }] 
});

//Creating and exporting the photo card model instance
module.exports = new mongoose.model('XCGal' , xclubGalleryPageSchema);