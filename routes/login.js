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
  User.find({username: req.body.uname}, function(err, person) {
    if (err) {
      req.session.err = err;
      res.redirect('/');
    } else if (!person[0]) {
      req.session.err = 'Email does not exist in our database.';
      res.redirect('/');
    } else if(req.body.psw2.hashCode() == person[0].password) {
      req.session.login = true;
      req.session.err = false;
      req.session.username = req.body.uname;
      res.redirect('/');
    } else {
      req.session.err = 'Password does not match our records.';
      res.redirect('/');
    }
  });
});

module.exports = router;
