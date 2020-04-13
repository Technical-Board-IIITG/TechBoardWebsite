const mongoose = require('mongoose');

//Table Schema
const demoSchema = new mongoose.Schema({
	stringData: String,
	numberData: Number,
	arrayData: [String],
	nestedArrayData: [{
			stringKey: String,
			numberKey: Number
	}]
});

//Creating Mongoose Model (Table) instance
const demoTable = new mongoose.model('demoTable', demoSchema);

//Exporting the table instance
module.exports = demoTable;
	
	
