// Use express and passport libraries.
var express = require('express');
var passport = require('passport');
var router = express.Router();

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

// GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET login route.
router.get('/login', function(req, res, next) {
  res.render('login', {
    heading: 'Login',
    layout: './partials/layout'
  });
});

// GET signup route.
router.get('/signup', function(req, res) {
  res.render('signup', {
    heading: 'Signup',
    layout: './partials/layout'
  });
});

// GET visuals data.
router.get('/visuals', isLoggedIn, function(req, res) {
  res.render('visuals', {
    title: 'IoT Visualisations',
    heading: 'Line Chart Visualisations',
    subheading: 'Moisture level readings over time.',
    layout: './partials/layout',
    user: req.user
  });
});

// Unauthenticate user.
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// POST signup authentication request.
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/signup'
}));

// POST login authentication request.
router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

module.exports = router;

// Check if user is authenticated.
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
  console.log('You must authenticate to access Visualisations.')
}
