var express = require('express');
var mqtt = require('mqtt');
var router = express.Router();

var client = mqtt.connect('127.0.0.1:15672'); // set client

client.on('connect', function () {
  client.subscribe('presence')
  client.publish('presence', 'Hello mqtt')
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
});

// GET index page
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'DJG44 IoT Project',
    heading: 'JavaScript frontend for IoT',
    subheading: '',
    layout: './partials/layout'
  });
});

module.exports = router;
