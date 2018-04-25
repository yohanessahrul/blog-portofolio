var mongoose = require('mongoose');

var schema = new mongoose.Schema({ 
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
});

var User = mongoose.model('user', schema);

module.exports = User