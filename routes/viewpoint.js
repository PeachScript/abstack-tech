var express = require('express'),
    router = express.Router();

router.get('/viewpoint', function(req, res) {
  res.render('viewpoint', {
    title: '观点'
  });
});

module.exports = router;
