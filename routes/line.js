var express = require('express');
var router = express.Router();

// GET visuals data
router.get('/', function(req, res, next) {
  res.render('line', {
    title: 'Line Chart',
    heading: 'Line Chart Visualisations',
    subheading: 'Moisture level readings over time.',
    layout: './partials/layout'
  });
});

module.exports = router;
