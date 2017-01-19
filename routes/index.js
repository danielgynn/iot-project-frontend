var express = require('express');
var router = express.Router();
var passport = require('passport');

// GET index page
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'DJG44 IoT Project',
    heading: 'JavaScript frontend for IoT',
    layout: './partials/layout',
    ws: 'ws://127.0.0.1:15675/ws',
    host: '192.168.1.212',
    user: req.user
  });
});

router.get('/login', function(req, res, next) {
  res.render('login', {
    // message: req.flash('loginMessage')
    heading: 'Login',
    layout: './partials/layout'
  });
});

router.get('/signup', function(req, res) {
  res.render('signup', {
    // message: req.flash('loginMessage')
    heading: 'Signup',
    layout: './partials/layout'
  });
});

// GET visuals data
router.get('/visuals', isLoggedIn, function(req, res) {
  res.render('visuals', {
    title: 'IoT Visualisations',
    heading: 'Line Chart Visualisations',
    subheading: 'Moisture level readings over time.',
    layout: './partials/layout',
    user: req.user
  });
});

// Unauthenticate user
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/signup',
  failureFlash: true,
}));

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
}));

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}
