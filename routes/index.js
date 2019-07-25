var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if(req.isAuthenticated())
    res.render('index', { username: req.user.displayName, mail: req.user.email });
  else
    res.render('index', { username: null});
});

module.exports = router;