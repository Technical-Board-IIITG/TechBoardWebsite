const mongoose    =  require("mongoose");

//schema setup
const xclub_resources_Schema = new mongoose.Schema({
    
    title : String, //resource title
    clubType : String,//type of the club
    description : String, //resource description
    urlLinks :[//array of url
    	{
    		url : String // link to resource
    	}
    ]
});

module.exports = mongoose.model("xclubResoures", xclub_resources_Schema);