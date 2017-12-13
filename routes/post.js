var express = require('express');
var router = express.Router();
var Post = require('../models/PostDB').Post;
var User = require('../models/UserDB').User;

router.post('/', function(req, res, next) {
  User.find({username: req.session.username}, function(err, user) {
    var name = req.session.username;
    console.log(req.body);
    var post = new Post({poster: name, question: req.body.question,
    summary: req.body.summary, folder: req.body.folder});
    user[0].posts.push(post._id);
    user[0].save(function(err) {
    });
    post.save(function(err) {
    });
  });
  res.redirect('/forum');
});

module.exports = router;
