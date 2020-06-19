const express = require('express');

const app = express();

const router = express.Router();

const mongoose = require('mongoose');

router.use(require('./API/GET/demoAPI.js'));

router.use(require('./API/GET/initiatives.js'));
router.use(require('./API/POST/initiatives.js'));
router.use(require('./API/DELETE/initiatives.js'));

router.use(require('./API/POST/landingPageIndex.js'));
router.use(require('./API/GET/landingPageIndex.js'));
router.use(require('./API/DELETE/landingPageIndex.js'));

router.use(require('./API/POST/xclubIndex.js'));
router.use(require('./API/GET/xclubIndex.js'));
router.use(require('./API/DELETE/xclubIndex.js'));

router.use(require('./API/POST/xclubGalleryPage.js'));
router.use(require('./API/GET/xclubGalleryPage.js'));
router.use(require('./API/DELETE/xclubGalleryPage.js'));

router.use(require('./API/GET/gallery.js'));

module.exports = router;
