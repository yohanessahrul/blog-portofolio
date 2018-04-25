var mongoose = require('mongoose');

var schema = new mongoose.Schema({ 
  title: String,
  description: String,
  url: String
}, {
  timestamps: true
});

var Article = mongoose.model('article', schema);

module.exports = Article