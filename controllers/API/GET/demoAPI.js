const express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

var demoTable  = require('../../../models/Demo.js');

router.get('/api/demo', (req, res) => {
	/*demoTable.create({
		"stringData":"This is String 1",
		"numberData":1111,
		"arrayData":["Array data 1", "Array Data 2"],
		"nestedArrayData":[{"stringKey":"This is nested String", "numberKey":2222}]
	});*/
	demoTable.find({"_id":"5e938f2b843ce0172306a61b"}, (err, jsonData) => {
		res.send(jsonData);
	})
});

module.exports = router;
