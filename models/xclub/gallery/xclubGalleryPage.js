const mongoose = require('mongoose');

//xclub gallery page model

const xclubGalleryPageSchema = new mongoose.Schema({

    clubID : Number,
    quote : String,
    about : String,
    image: [{
        title : String,
        about : String,
        coverImage : URL,
        date : Date,
        urls : [{
            url : URL
        }]
    }] 
});

//Creating and exporting the photo card model instance
module.exports = new mongoose.model('XCGal' , xclubGalleryPageSchema);