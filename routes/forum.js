var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if(!req.session.login) {
  	req.session.err = 'Cannot access forum without logging in!'
  	res.redirect('/');
  } else {
  	req.session.err = false;
  	res.render('forum', { title: 'Penn-Blockchain', username: req.session.username, login: req.session.login});
  }
});

module.exports = router;