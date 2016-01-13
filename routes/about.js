var express = require('express'),
    router = express.Router();

router.get('/about', function(req, res) {
  res.render('about', {
    title: '关于'
  });
});

module.exports = router;
