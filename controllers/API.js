var express = require('express');
var app = express();

var router = express.Router();

const mongoose = require('mongoose');

router.use(require('./API/GET/demoAPI.js'));
router.use(require('./API/POST/landingPageIndex.js'));
router.use(require('./API/GET/landingPageIndex.js'));
router.use(require('./API/DELETE/landingPageIndex.js'));
module.exports = router;
