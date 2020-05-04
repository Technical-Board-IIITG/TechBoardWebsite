const mongoose = require('mongoose');

//xclub index page - data model

const xclubIndexPageSchema = new mongoose.Schema({

//member card data
coordinators : [{
    photo : String,
    name : String,
    designation : String,
    about : String,
    facebook : String,
    instagram : String,
    linkedin : String,
    email : String
}]

});

//Creating and exporting the xclub index data model instance
module.exports = new mongoose.model('xclubIndexPage' , xclubIndexPageSchema);