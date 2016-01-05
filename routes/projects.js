var express = require('express'),
    router = express.Router();

router.get('/projects', function(req, res) {
  res.render('project_list', {
    title: '项目'
  });
});

module.exports = router;
