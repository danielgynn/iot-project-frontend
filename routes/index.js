var express = require('express');
var router = express.Router();

// GET index page
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'DJG44 IoT Project',
    heading: 'JavaScript frontend for IoT',
    layout: './partials/layout'
  });
});

module.exports = router;
