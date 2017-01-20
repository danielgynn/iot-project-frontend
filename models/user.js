// Include libraries.
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// Require user to have email and password.
var userSchema = mongoose.Schema({
  local: {
    email: String,
    password: String,
  },
});

// Ensure passwords are secure.
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};
module.exports = mongoose.model('User', userSchema);
