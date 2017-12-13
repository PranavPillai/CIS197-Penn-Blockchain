var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.login = false;
  req.session.err = false;
  req.session.username = null;
  res.render('index', { title: 'Penn Blockchain', error: req.session.err, login: req.session.login});
});

module.exports = router;
