var express = require('express');
var router = express.Router();
var User = require('../models/UserDB').User;

String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

router.post('/', function(req, res, next) {
  var error = false;
  if(req.body.psw !== req.body['psw-repeat']) {} else {
    User.find({username: req.body.email}, function(err, user) {
      if(user.length != 0) {
        req.session.err = "This email already exists in our database."
        res.redirect('/'); 
      } else {
        User.create({username: req.body.email, password: req.body.psw.hashCode()}, function(err, user) {
          if(err) error = "There was an error registering. Please try again";
        });
        req.session.username = req.body.email;
        req.session.login = true;
        res.redirect('/');
      }
    });
  }
});

module.exports = router;
