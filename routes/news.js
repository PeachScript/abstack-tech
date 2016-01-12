var express = require('express'),
    router = express.Router();

router.get('/news', function(req, res) {
  res.render('in_making', {
    title: '动态'
  });
});

module.exports = router;
