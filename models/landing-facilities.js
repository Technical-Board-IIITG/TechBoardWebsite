const mongoose = require("mongoose");

const LandingFacilitiesPageSchema = new mongoose.Schema({
    logo : String,
    about : String,
    facilities :[{
        FacilityTitle : String,
        FacilityDescription : String,
        FacilityImage : String,
        FacilityReference : String
    }]
});

module.exports = new mongoose.model("LandingFacilities", LandingFacilitiesPageSchema);