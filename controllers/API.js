var express = require('express');
var app = express();

var router = express.Router();

const mongoose = require('mongoose');

router.use(require('./API/GET/demoAPI.js'));
router.use(require('./API/GET/initiatives.js'));
router.use(require('./API/POST/initiatives.js'));
router.use(require('./API/DELETE/initiatives.js'));

module.exports = router;
