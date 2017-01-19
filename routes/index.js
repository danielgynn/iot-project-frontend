var express = require('express');
var router = express.Router();

// GET index page
router.get('/', function(req, res, next) {

  res.render('index', {
    title: 'DJG44 IoT Project',
    heading: 'JavaScript frontend for IoT',
    layout: './partials/layout',
    ws: 'ws://127.0.0.1:15675/ws',
    host: '192.168.1.212'
  });
});

module.exports = router;
