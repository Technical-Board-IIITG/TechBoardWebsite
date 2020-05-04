const mongoose = require('mongoose');

//xclub gallery page model

const xclubGalleryPageSchema = new mongoose.Schema({

galleryItem: [{
    images : [{
        imgUrl : String
    }],
    title: String,
    date : Date
}]    

});

//Creating and exporting the photo card model instance
module.exports = new mongoose.model('xclubGalleryPage' , xclubGalleryPageSchema);