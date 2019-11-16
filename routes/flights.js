var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

/* /flights..... */
router.get('/', flightsCtrl.new);
router.post('/', flightsCtrl.create);

module.exports = router;
