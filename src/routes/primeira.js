const express = require('express');
const router = express.Router();
const controller = require('../controllers/primeira-controller')



router.get('/', controller.get);


module.exports = router; 