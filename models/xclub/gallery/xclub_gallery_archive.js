const mongoose    =  require("mongoose");

//schema setup
const xclub_galleryAarchive_Schema = new mongoose.Schema({
    
    title : String, //image title
    image : String, //url of the image
    description : String //description of the image
});

module.exports = mongoose.model("xclub_galleryArchive", xclub_galleryAarchive_Schema);