//Import the mongoose module
var mongoose = require('mongoose');

//Define User Schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: {
    type: String,
    minlength: [7, "Password must be greater than 6 characters in length"]
  },
  admin: {
    type: Boolean,
    default: false
  },
  posts: {
    type: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    default: []
  }
});

var User = mongoose.model('User', userSchema);
// User.create({username: "pranavp802", password: "password"}, function(err, user) {
//   if(err) return handleError(err);
//   else console.log('saved!');
// });
module.exports = {
  User: User
}
