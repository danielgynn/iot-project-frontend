var express = require('express');
var router = express.Router();

// GET visuals data
router.get('/', function(req, res, next) {
  res.render('bar', {
    title: 'Bar Data Visualisations',
    heading: 'Bar Chart Visualisations',
    layout: './partials/layout'
  });
});

module.exports = router;
