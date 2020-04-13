var express = require('express');
var app = express();

var router = express.Router();

const mongoose = require('mongoose');

router.use(require('./API/GET/demoAPI.js'))

module.exports = router;
