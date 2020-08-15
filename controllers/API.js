const express = require('express');
const app = express();

const router = express.Router();

const mongoose = require('mongoose');

router.use(require('./API/GET/demoAPI.js'))

module.exports = router;
