const User = require('../models/user');
const passport = require('passport');
const viewPath = 'sessions';

// Step 1: Add the login logic

// Step 2: Add the authentication logic

// Step 3: Add the logout logic

exports.new = (req, res) => {
    res.render(`${viewPath}/new`, {
      pageTitle: 'Login'
    });
  };
  
  exports.create = (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/plans',
      successFlash: 'You were successfully logged in.',
      failureRedirect: '/login',
      failureFlash: 'Invalid credentials'
    })(req, res, next);
  };
  
  exports.delete = (req, res) => {
    req.logout();
    req.flash('success', 'You were logged out successfully.');
    res.redirect('/');
  };