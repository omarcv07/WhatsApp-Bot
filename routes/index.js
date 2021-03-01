var express = require('express');
var router = express.Router();

const TwilioController = require('../controllers/twilio.controller');

/* twilio endpoints */
router.post('/send', TwilioController.sendWsMsg);

module.exports = router;
