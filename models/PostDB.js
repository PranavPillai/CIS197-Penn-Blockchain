//Import the mongoose module
var mongoose = require('mongoose');

//Define User Schema
var Schema = mongoose.Schema;

var postSchema = new Schema({
  poster: {
    type: String,
    default: 'Anonymous'
  },
  time: {
    type: Date,
    default: Date.now
  },
  question: String,
  summary: String,
  folder: String,
  answers: {
    type: [String],
    default: []
  }
});

var Post = mongoose.model('Post', postSchema);

module.exports = {
  Post: Post
}
