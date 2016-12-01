var express = require('express');
var router = express.Router();

// GET visuals data
router.get('/', function(req, res, next) {
  res.render('visuals', {
    title: 'Data Visualisations',
    heading: 'D3 graphs & charts for visuals',
    layout: './partials/layout'
  });
});

module.exports = router;
